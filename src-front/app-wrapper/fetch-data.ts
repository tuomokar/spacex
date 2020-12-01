import { useEffect, useState } from 'react';

import LaunchItem from '../types/Launch';
import Payload from '../types/Payload';
import CrewMember from '../types/CrewMember';
import { fetchCrewMembers, fetchLaunches, fetchPayloads } from '../api-calls';

type Data = {
  launches: null | LaunchItem[];
  payloads: null | Payload[];
  crewMembers: null | CrewMember[];
};

const useFetchData = (): { data: Data; errored: boolean } => {
  const [data, setData] = useState<Data>({
    launches: null,
    payloads: null,
    crewMembers: null,
  });
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    (async () => {
      const [
        { data: launchesData, succeeded: launchesSucceeded },
        { data: payloadsData, succeeded: payloadsSucceeded },
        { data: crewMembersData, succeeded: crewMembersSucceeded },
      ] = await Promise.all([
        fetchLaunches(),
        fetchPayloads(),
        fetchCrewMembers(),
      ]);

      if (!launchesSucceeded || !payloadsSucceeded || !crewMembersSucceeded) {
        setErrored(true);
      } else {
        setData({
          launches: launchesData,
          payloads: payloadsData,
          crewMembers: crewMembersData,
        });
      }
    })();
  }, []);

  return {
    data,
    errored,
  };
};

export { useFetchData };
