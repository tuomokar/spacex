import { FunctionComponent } from 'react';
import LaunchItem from '../types/Launch';

interface LaunchProps {
  launch: LaunchItem;
}

const Launch: FunctionComponent<LaunchProps> = ({ launch }) => {
  return <div>{launch.name}</div>;
};

export default Launch;
