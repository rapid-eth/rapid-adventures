import { WALLET_SIGN_TRANSACTION_REQUEST } from '../types';
export const sendTRANSACTION_REQUEST = (state, dispatch) => (
  contractID,
  functionName,
  params
) => {
  const contract = state.contracts[contractID];
  const contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    dispatch({
      type: WALLET_SIGN_TRANSACTION_REQUEST,
      input: tx
    });
  });
};
