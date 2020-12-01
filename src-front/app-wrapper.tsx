import { FunctionComponent, useReducer } from 'react';
import type { AppProps } from 'next/app';

import { INITIAL_STATE } from './state/constants';
import reducer from './state/reducer';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [{ launches, payloads, crewMembers }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE,
  );

  return (
    <Component
      {...pageProps}
      dispatch={dispatch}
      launches={launches}
      crewMembers={crewMembers}
      payloads={payloads}
    />
  );
};

export default App;
