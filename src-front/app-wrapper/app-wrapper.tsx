import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import { useFetchData } from './fetch-data';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const {
    data: { launches, payloads, crewMembers },
    errored,
  } = useFetchData();

  return (
    <Component
      {...pageProps}
      errored={errored}
      launches={launches}
      crewMembers={crewMembers}
      payloads={payloads}
    />
  );
};

export default App;
