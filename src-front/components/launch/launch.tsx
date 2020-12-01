import { FunctionComponent } from 'react';
import Link from 'next/link';

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
        <Link href={`/launches/${id}`}>{name}</Link>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default Launch;
