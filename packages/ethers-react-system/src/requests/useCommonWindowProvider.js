import { ethers } from 'ethers';
/**
 * @function useCommonSetWallet
 * @description Watch the Browser ethereum object.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useCommonWindowProvider = (state, dispatch) => {
  const [isProviderReady, setProviderReady] = useState();

  useEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          mainnet: ethers.getDefaultProvider('mainnet'), // Add toggle.
          kovan: ethers.getDefaultProvider('kovan'), // Add toggle.
          rinkeby: ethers.getDefaultProvider('rinkeby') // Add toggle.
        }
      });
      setProviderReady(true);
    } else {
      dispatch({
        type: 'SET_PROVIDER_STATUS',
        payload: undefined
      });
      setProviderReady(false);
    }
  }, [window.web3 && window.web3.currentProvider]);

  return isProviderReady;
};
