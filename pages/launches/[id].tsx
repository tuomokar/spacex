import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { fetchLaunch, fetchRocket } from '../../src/api-calls';
import GenericError from '../../src/components/error';
// TODO: might actually be better to name this as Launch and the component Launch -> LaunchItem
import LaunchItem from '../../src/types/Launch';
import Rocket from '../../src/types/Rocket';

const LaunchPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [errored, setErrored] = useState<boolean>(null);
  const [launch, setLaunch] = useState<null | LaunchItem>(null);
  const [rocket, setRocket] = useState<null | Rocket>(null);

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

  useEffect(() => {
    if (!launch) {
      return;
    }

    (async () => {
      const { data, succeeded } = await fetchRocket(launch.rocket);

      if (!succeeded) {
        setErrored(true);
      } else {
        setRocket(data);
      }
    })();
  }, [launch]);

  return (
    <div>
      {launch?.name}
      {rocket && (
        <div>
          The rocket used in the launch
          <div>{rocket.name}</div>
        </div>
      )}
      {errored && <GenericError />}
    </div>
  );
};

export default LaunchPage;
