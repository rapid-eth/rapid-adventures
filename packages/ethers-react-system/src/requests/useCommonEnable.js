/**
 * @function useCommonEnableEffect
 * @description Handle the Ethereum wallet enable request.
 * @param {Object} state
 * @param {Object} dispatch
 * @todo Lots... support everything better.
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Local --- */
import { ENABLE_SUCCESS, ENABLE_FAILURE } from '../types';

/* --- Component --- */
export const useCommonEnable = (state, dispatch) => {
  const [enabled, setEnabled] = useState();

  useEffect(() => {
    if (state.isEnableRequested) {
      const runEffect = async () => {
        try {
          const accounts = await window.ethereum.enable();
          const address = accounts[0];
          if (address) {
            dispatch({
              type: ENABLE_SUCCESS
            });
            setEnabled(true);
          }
        } catch (error) {
          dispatch({
            type: ENABLE_FAILURE
          });
          setEnabled(false);
        }
      };
      runEffect();
    }
  }, [state.isEnableRequested]);

  return enabled;
};
