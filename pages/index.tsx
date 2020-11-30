import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import Head from 'next/head';
import LaunchItem from '../src-front/types/Launch';
import { fetchLaunches } from '../src-front/api-calls';
import Launches from '../src-front/components/launches';
import GenericError from '../src-front/components/error';

const HomePage: FunctionComponent = () => {
  const [launches, setLaunches] = useState<null | LaunchItem[]>(null);
  const [errored, setErrored] = useState<boolean>(null);

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
