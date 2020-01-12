import { ethers } from 'ethers';
/**
 * @function useCommonSetWallet
 * @description Watch the Browser ethereum object.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';
import {
  WALLET_PROVIDER_GET_SUCCESS,
  WALLET_PROVIDER_GET_FAILURE
} from '../types';

/* --- Effect --- */
export const useWalletProviderInstance = (state, dispatch) => {
  const [isSignerReady, setSignerReady] = useState();

  useEffect(() => {
    const runEffect = async () => {
      if (window.web3 && window.web3.currentProvider) {
        const provider = window.web3.currentProvider;
        dispatch({
          type: WALLET_PROVIDER_GET_SUCCESS,
          payload: provider
        });
        setSignerReady(true);
      } else {
        dispatch({
          type: WALLET_PROVIDER_GET_FAILURE,
          payload: undefined
        });
        setSignerReady(false);
      }
    };
    runEffect();
  }, [state.wallet]);

  return isSignerReady;
};
