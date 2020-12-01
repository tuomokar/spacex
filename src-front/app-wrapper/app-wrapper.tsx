import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import LaunchItem from '../types/Launch';
import Payload from '../types/Payload';
import CrewMember from '../types/CrewMember';
import { fetchCrewMembers, fetchLaunches, fetchPayloads } from '../api-calls';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [launches, setLaunches] = useState<null | LaunchItem[]>(null);
  const [payloads, setPayloads] = useState<null | Payload[]>(null);
  const [crewMembers, setCrewMembers] = useState<null | CrewMember[]>(null);

  const [errored, setErrored] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchLaunches();

      if (!succeeded) {
        setErrored(true);
      } else {
        setLaunches(data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchPayloads();

      if (!succeeded) {
        setErrored(true);
      } else {
        setPayloads(data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchCrewMembers();

      if (!succeeded) {
        setErrored(true);
      } else {
        setCrewMembers(data);
      }
    })();
  }, []);

  return (
    <Component
      {...pageProps}
      errored={errored}
      launches={launches}
      crewMembers={crewMembers}
      payloads={payloads}
    />
  );
};

export default App;
