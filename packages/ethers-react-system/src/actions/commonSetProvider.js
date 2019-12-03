import { SET_PROVIDER } from '../types';
export const commonSetProvider = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: SET_PROVIDER,
    payload: provider
  });
