import { SET_PROVIDER } from '../types';
export const setProvider = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: SET_PROVIDER,
    payload: provider
  });
