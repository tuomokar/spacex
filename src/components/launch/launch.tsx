import { FunctionComponent } from 'react';
import LaunchItem from '../../types/Launch';
import styles from './launch.module.css';

interface LaunchProps {
  launch: LaunchItem;
}

const Launch: FunctionComponent<LaunchProps> = ({ launch }) => {
  const { id, name, date_local: date } = launch;

  return (
    <div className={styles.container}>
      <div>
        <a href={`/launches/${id}`}>{name}</a>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default Launch;
