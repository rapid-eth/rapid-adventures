/**
 * @function useWalletSendTransaction
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect, useMemo } from 'react';

/* --- Local --- */
import {
  WALLET_SEND_TRANSACTION_SUCCESS,
  WALLET_SEND_TRANSACTION_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSendTransaction = (state, dispatch) => {
  useEffect(() => {
    if (
      state.provider &&
      state.wallet &&
      state.store.transactions &&
      state.store.transactions.length > 0
    ) {
      const runEffect = async () => {
        const transaction = state.store.transactions[0];

        try {
          dispatch({
            type: WALLET_SEND_TRANSACTION_SUCCESS,
            id: messageRequest.id,
            payload: signature
          });
          setResponse(true);
        } catch (error) {
          dispatch({
            type: WALLET_SEND_TRANSACTION_FAILURE,
            id: messageRequest.id,
            payload: error
          });
          setResponse(false);
        }
      };
      runEffect();
    }
  }, [useMemo(state.store.transactions, [state.store.transactions])]);
};
