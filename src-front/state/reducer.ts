import type { Reducer } from 'react';
import {
  SET_LAUNCHES_ACTION_TYPE,
  SET_PAYLOADS_ACTION_TYPE,
} from './constants';

import State from './State';
import StateAction from './StateAction';

const reducer: Reducer<State, StateAction> = (state, action) => {
  switch (action.type) {
    case SET_LAUNCHES_ACTION_TYPE: {
      // TODO: should type it better, without the typecast, without the typecast
      // it doesn't know how to do the type discrimination properly now so it thinks
      // it can be of either Payload[] or Launch[]
      return { ...state, launches: action.payload as State['launches'] };
    }
    case SET_PAYLOADS_ACTION_TYPE: {
      return { ...state, payloads: action.payload as State['payloads'] };
    }
    default: {
      throw new Error();
    }
  }
};

export default reducer;
