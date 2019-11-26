import { DEPLOY_CONTRACT_REQUEST } from '../types';
export const deployContractRequest = (state, dispatch) => ({
  contract,
  delta,
  values
}) =>
  dispatch({
    type: DEPLOY_CONTRACT_REQUEST,
    payload: {
      contract,
      values
    },
    delta: delta || (contract && contract.contractName)
  });
