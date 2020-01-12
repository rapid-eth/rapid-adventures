/**
 * @function useAddressSet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Local --- */
import { ENABLE_SUCCESS, ENABLE_FAILURE, SET_ADDRESS } from '../types';

/* --- Component --- */
export const useAddressSet = (state, dispatch) => {
  const [enabled, setEnabled] = useState();

  useEffect(() => {
    if (state.isEnableSuccess) {
      const runEffect = async () => {
        try {
          const accounts = await ethereum.send('eth_requestAccounts');
          const address = accounts.result[0];
          if (address) {
            dispatch({
              payload: address,
              type: SET_ADDRESS
            });
            setEnabled(true);
          }
        } catch (error) {
          setEnabled(false);
        }
      };
      runEffect();
    }
  }, [state.isEnableSuccess]);

  return enabled;
};
