import * as actions from '../actions';
import { Action } from '../actions/types';
const keys = Object.keys(actions);

const enhanceActions = (state, dispatch) => {
  let enhanced = {};
  keys.forEach(action => {
    const actionCreator = actions[action];
    enhanced[action] = actionCreator(state, dispatch);
  });
  return enhanced;
};

export { enhanceActions };
