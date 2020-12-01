import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { fetchLaunch, fetchRocket } from '../../src-front/api-calls';
import GenericError from '../../src-front/components/error';
import State from '../../src-front/state/State';
import Rocket from '../../src-front/types/Rocket';

interface LaunchPageProps extends Pick<State, 'launches' | 'payloads'> {}

const getLaunchFromLocalLaunches = (
  id,
  launches: LaunchPageProps['launches'],
) => {
  if (!launches) {
    return null;
  }

  if (typeof id !== 'string') {
    return null;
  }

  return launches.find((launch) => launch.id === id) ?? null;
};

// TODO: could put this to its own file
const useGetLaunch = (
  launches: LaunchPageProps['launches'],
  setErrored: (boolean) => void,
) => {
  const router = useRouter();
  const { id } = router.query;
  const [launch, setLaunch] = useState(
    getLaunchFromLocalLaunches(id, launches),
  );

  useEffect(() => {
    if (launch || typeof id !== 'string') {
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
  }, [id, launch, setErrored]);

  return launch;
};

const LaunchPage: FunctionComponent<LaunchPageProps> = ({
  launches,
  payloads,
}) => {
  const [errored, setErrored] = useState<boolean>(false);

  const launch = useGetLaunch(launches, setErrored);
  const [rocket, setRocket] = useState<null | Rocket>(null);

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

  if (errored) {
    return <GenericError />;
  }

  // TODO: would be better to have separate state for loading
  if (!launch) {
    return <div>Loading, please wait..</div>;
  }

  const launchPayloads = payloads?.filter(
    (payload) => payload.launch === launch.id,
  );

  return (
    <div>
      {launch.name}
      {rocket && (
        <div>
          The rocket used in the launch:
          <div>{rocket.name}</div>
        </div>
      )}
      {launchPayloads && (
        <div>
          {"The launch's payloads:"}
          <ul>
            {launchPayloads?.map((payload) => (
              <li key={payload.name}>{payload.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LaunchPage;
