import Link from 'next/link';
import { FunctionComponent } from 'react';

import styles from './to-main-page-link.module.css';

const ToMainPageLink: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Back to the main page</a>
      </Link>
    </div>
  );
};

export default ToMainPageLink;
