import State from './State';

export default interface StateAction {
  type: string;
  // Typing it like this would be a problem (type of any value in the state), if we wanted to do any calculations
  // related to the state in the reducer, instead of all actions having the payload ready to be set to the state.
  // This is enough for this case however.
  payload: State[keyof State];
}
