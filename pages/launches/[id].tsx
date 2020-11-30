import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { fetchLaunch } from '../../src/api-calls';
import GenericError from '../../src/components/error';
import LaunchItem from '../../src/types/Launch';

const LaunchPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [errored, setErrored] = useState<boolean>(null);
  const [launch, setLaunch] = useState<null | LaunchItem>(null);

  useEffect(() => {
    if (!id || typeof id !== 'string') {
      return;
    }

    (async () => {
      const { data, succeeded } = await fetchLaunch(id);

      if (!succeeded) {
        setErrored(true);
      } else {
        setLaunch(data);
      }
    })();
  }, [id]);

  return (
    <div>
      {launch?.name}
      {errored && <GenericError />}
    </div>
  );
};

export default LaunchPage;
