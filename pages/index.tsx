import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import Head from 'next/head';
import Launch from '../src/types/Launch';
import { fetchLaunches } from '../src/api-calls';

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

      <div>
        {launches?.map((launch) => (
          <div>
            <div>{launch.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
