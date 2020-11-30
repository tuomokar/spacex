import type { FunctionComponent } from 'react';
import Launch from './types/Launch';

interface LaunchesProps {
  launches: Launch[];
}

const Launches: FunctionComponent<LaunchesProps> = ({ launches }) => {
  return <div>{launches.map(({ id }) => id)}</div>;
};

export default Launches;
