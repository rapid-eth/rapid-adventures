"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowProvider = void 0;

var _ethers = require("ethers");

var _react = require("react");

/**
 * @function useWindowProviderEffect
 * @description Watch the Browser ethereum object.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useWindowProvider = (state, dispatch) => {
  var [isProviderReady, setProviderReady] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          injected: window.web3.currentProvider,
          mainnet: _ethers.ethers.getDefaultProvider('mainnet') // Add toggle.
          // gorli: ethers.getDefaultProvider('gorli'), // Add toggle.
          // rinkeby: ethers.getDefaultProvider('rinkeby') // Add toggle.

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

exports.useWindowProvider = useWindowProvider;