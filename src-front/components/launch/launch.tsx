import { FunctionComponent } from 'react';
import Link from 'next/link';

import LaunchItem from '../../types/Launch';
import styles from './launch.module.css';
import { formatDate } from '../../utils/date-utils';

interface LaunchProps {
  launch: LaunchItem;
}

const Launch: FunctionComponent<LaunchProps> = ({ launch }) => {
  const { id, name, date_local: date, crew } = launch;

  const dateAsDateObject = new Date(date);

  return (
    <div className={styles.container}>
      <div className={styles.dataPiece}>
        <Link href={`/launches/${id}`}>{name}</Link>
      </div>
      <div className={styles.dataPiece}>{formatDate(dateAsDateObject)}</div>
      <div className={styles.dataPiece}>
        {launch.crew && launch.crew.length > 0 ? 'Has crew' : 'No crew'}
      </div>
    </div>
  );
};

export default Launch;
