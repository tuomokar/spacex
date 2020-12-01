import State from './State';

export const INITIAL_STATE: State = {
  launches: null,
  payloads: null,
};

export const SET_LAUNCHES_ACTION_TYPE = 'setLaunches';
export const SET_PAYLOADS_ACTION_TYPE = 'setPayloads';
