import type { FunctionComponent } from 'react';
import Head from 'next/head';
import Launches from '../components/launches';
import GenericError from '../components/error';
import LaunchItem from '../types/Launch';

interface HomePageProps {
  errored: boolean;
  launches: LaunchItem[] | null;
}

const HomePage: FunctionComponent<HomePageProps> = ({ launches, errored }) => {
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
