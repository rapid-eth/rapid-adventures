import { ethers } from 'ethers';
/**
 * @function useCommonSetWallet
 * @description Watch the Browser ethereum object.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';
import { SIGNER_GET_SUCCESS, SIGNER_GET_FAILURE } from '../types';
/* --- Component --- */
export const useSignerGet = (state, dispatch) => {
  const [isSignerReady, setSignerReady] = useState();

  useEffect(() => {
    const runEffect = async () => {
      if (state.injected) {
        const provider = new state.instance.providers.Web3Provider(
          state.injected
        );
        const signer = await provider.getSigner();
        dispatch({
          type: SIGNER_GET_SUCCESS,
          payload: signer
        });
        setSignerReady(true);
      } else {
        dispatch({
          type: SIGNER_GET_FAILURE,
          payload: undefined
        });
        setSignerReady(false);
      }
    };
    runEffect();
  }, [state.injected]);

  return isSignerReady;
};
