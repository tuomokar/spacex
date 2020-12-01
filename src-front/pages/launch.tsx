import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { fetchLaunch, fetchRocket } from '../api-calls';
import GenericError from '../components/error';
import RocketType from '../types/Rocket';
import CrewMember from '../types/CrewMember';
import LaunchItem from '../types/Launch';
import Payload from '../types/Payload';
import CrewMembers from '../components/crew-members';
import Payloads from '../components/payloads';
import Rocket from '../components/rocket/rocket';

interface LaunchPageProps {
  launches: LaunchItem[] | null;
  payloads: Payload[] | null;
  crewMembers: CrewMember[] | null;
}

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
  setErrored: (errored: boolean) => void,
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
  crewMembers,
}) => {
  const [errored, setErrored] = useState<boolean>(false);
  const [rocket, setRocket] = useState<null | RocketType>(null);
  const launch = useGetLaunch(launches, setErrored);

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

  const launchPayloads =
    payloads?.filter((payload) => payload.launch === launch.id) ?? null;

  const launchCrewMembers =
    crewMembers?.filter((member) => member.launches.includes(launch.id)) ??
    null;

  return (
    <div>
      {launch.name}
      <Rocket rocket={rocket} />
      <Payloads payloads={launchPayloads} />
      <CrewMembers crewMembers={launchCrewMembers} />
    </div>
  );
};

export default LaunchPage;
