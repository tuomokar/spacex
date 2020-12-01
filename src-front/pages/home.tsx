import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import Head from 'next/head';
import { fetchCrewMembers, fetchLaunches, fetchPayloads } from '../api-calls';
import Launches from '../components/launches';
import GenericError from '../components/error';
import State from '../state/State';
import type Dispatch from '../state/Dispatch';
import {
  SET_CREW_ACTION_TYPE,
  SET_LAUNCHES_ACTION_TYPE,
  SET_PAYLOADS_ACTION_TYPE,
} from '../state/constants';

interface HomePageProps extends Pick<State, 'launches'> {
  dispatch: Dispatch;
}

const HomePage: FunctionComponent<HomePageProps> = ({ launches, dispatch }) => {
  const [errored, setErrored] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchLaunches();

      if (!succeeded) {
        setErrored(true);
      } else {
        dispatch({ type: SET_LAUNCHES_ACTION_TYPE, payload: data });
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchPayloads();

      if (!succeeded) {
        setErrored(true);
      } else {
        dispatch({ type: SET_PAYLOADS_ACTION_TYPE, payload: data });
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const { data, succeeded } = await fetchCrewMembers();

      if (!succeeded) {
        setErrored(true);
      } else {
        dispatch({ type: SET_CREW_ACTION_TYPE, payload: data });
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>The best SpaceX app</title>
      </Head>

      {launches && <Launches launches={launches} />}
      {errored && <GenericError />}
    </div>
  );
};

export default HomePage;