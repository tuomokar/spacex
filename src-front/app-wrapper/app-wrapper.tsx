import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import { useFetchData } from './fetch-data';
import styles from './app-wrapper.module.css';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const {
    data: { launches, payloads, crewMembers },
    errored,
  } = useFetchData();

  return (
    <div className={styles.container}>
      <Component
        {...pageProps}
        errored={errored}
        launches={launches}
        crewMembers={crewMembers}
        payloads={payloads}
      />
    </div>
  );
};

export default App;
