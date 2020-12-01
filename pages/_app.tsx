import { FunctionComponent, useReducer } from 'react';
import type { AppProps } from 'next/app';

import '../src-front/styles/globals.css';
import { INITIAL_STATE } from '../src-front/state/constants';
import reducer from '../src-front/state/reducer';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [{ launches, payloads }, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Component
      {...pageProps}
      dispatch={dispatch}
      launches={launches}
      payloads={payloads}
    />
  );
};

export default App;
