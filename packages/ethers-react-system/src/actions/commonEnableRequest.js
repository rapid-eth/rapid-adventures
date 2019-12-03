import { ENABLE_REQUEST } from '../types';

export const commonEnableRequest = (state, dispatch) => () =>
  dispatch({
    type: ENABLE_REQUEST
  });
