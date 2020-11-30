import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import Head from 'next/head';
import Launch from '../src/types/Launch';
import { fetchLaunches } from '../src/api-calls';
import Launches from '../src/launches';

const HomePage: FunctionComponent = () => {
  const [launches, setLaunches] = useState<null | Launch[]>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchLaunches();

      setLaunches(data);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>The best SpaceX app</title>
      </Head>

      {launches && <Launches launches={launches} />}
    </div>
  );
};

export default HomePage;
