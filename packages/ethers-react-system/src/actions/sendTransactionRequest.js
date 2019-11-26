import { SIGN_TRANSACTION_REQUEST } from '../types';
export const sendTransactionRequest = (state, dispatch) => (
  contractID,
  functionName,
  params
) => {
  const contract = state.contracts[contractID];
  const contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    dispatch({
      type: SIGN_TRANSACTION_REQUEST,
      input: tx
    });
  });
};
