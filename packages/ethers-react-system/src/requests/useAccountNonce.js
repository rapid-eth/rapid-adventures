/**
 * @function useAccountNonce
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { NONCE_SET } from '../types';

/* --- Component --- */
export const useAccountNonce = (state, dispatch) => {
  useEffect(() => {
    if (state.wallet) {
      const runEffect = async () => {
        try {
          const nonce = await state.wallet.getTransactionCount();
          dispatch({
            payload: nonce,
            type: NONCE_SET
          });
        } catch (error) {
          console.log(error);
        }
      };
      runEffect();
    }
  }, [state.wallet]);

  return true;
};
