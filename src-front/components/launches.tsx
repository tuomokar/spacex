import type { FunctionComponent } from 'react';
import LaunchItem from '../types/Launch';
import Launch from './launch';

interface LaunchesProps {
  launches: LaunchItem[];
}

const Launches: FunctionComponent<LaunchesProps> = ({ launches }) => {
  return (
    <div>
      {launches.map((launch) => (
        <Launch key={launch.id} launch={launch} />
      ))}
    </div>
  );
};

export default Launches;
