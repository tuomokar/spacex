import { FunctionComponent } from 'react';
import RocketType from '../../types/Rocket';

interface RocketProps {
  rocket: RocketType | null;
}

const Rocket: FunctionComponent<RocketProps> = ({ rocket }) => {
  if (!rocket) {
    return null;
  }

  return (
    <div>
      The rocket used in the launch:
      <div>{rocket.name}</div>
    </div>
  );
};

export default Rocket;
