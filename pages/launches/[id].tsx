import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { fetchLaunch } from '../../src/api-calls';
import LaunchItem from '../../src/types/Launch';

const LaunchPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [launch, setLaunch] = useState<null | LaunchItem>(null);

  useEffect(() => {
    if (!id || typeof id !== 'string') {
      return;
    }

    (async () => {
      const launchItem = await fetchLaunch(id);

      setLaunch(launchItem);
    })();
  }, [id]);

  return <div>{launch?.name}</div>;
};

export default LaunchPage;
