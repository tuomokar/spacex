import type { Reducer } from 'react';
import { SET_LAUNCHES_ACTION_TYPE } from './constants';

import State from './State';
import StateAction from './StateAction';

const reducer: Reducer<State, StateAction> = (state, action) => {
  switch (action.type) {
    case SET_LAUNCHES_ACTION_TYPE: {
      return { launches: action.payload };
    }
    default: {
      throw new Error();
    }
  }
};

export default reducer;
