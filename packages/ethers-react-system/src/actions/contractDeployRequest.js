import { CONTRACT_DEPLOY_REQUEST } from '../types';
export const contractDeployRequest = (state, dispatch) => ({
  contract,
  delta,
  values
}) =>
  dispatch({
    type: CONTRACT_DEPLOY_REQUEST,
    payload: {
      contract,
      values
    },
    delta: delta
  });
