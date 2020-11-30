import { FunctionComponent } from 'react';
import LaunchItem from '../../types/Launch';
import styles from './launch.module.css';

interface LaunchProps {
  launch: LaunchItem;
}

const Launch: FunctionComponent<LaunchProps> = ({ launch }) => {
  const { name, date_local: date } = launch;
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>{date}</div>
    </div>
  );
};

export default Launch;
