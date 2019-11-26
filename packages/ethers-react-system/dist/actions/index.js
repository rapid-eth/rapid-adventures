"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "enableRequest", {
  enumerable: true,
  get: function get() {
    return _enableRequest.enableRequest;
  }
});
Object.defineProperty(exports, "setProvider", {
  enumerable: true,
  get: function get() {
    return _setProvider.setProvider;
  }
});
exports.generateWallet = exports.initContractFromLibrary = exports.initContract = exports.loadContractIntoLibrary = exports.setProviderStatus = void 0;

var _utilities = require("../utilities");

var _ethers = require("ethers");

var _types = require("../types");

var _enableRequest = require("./enableRequest");

var _setProvider = require("./setProvider");

/**
 *
 * @param {Object} provider
 */
var setProviderStatus = (state, dispatch) => (_ref) => {
  var {
    provider
  } = _ref;
  return dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });
};
/* --- Library ---- */


exports.setProviderStatus = setProviderStatus;

var loadContractIntoLibrary = (state, dispatch) => (_ref2) => {
  var {
    abi,
    contractName
  } = _ref2;
  return dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });
};
/**
 * @summary This function will take the built smart contracts(and a optional deployed address param)
 * and initialize the smart contract with the deployed version.
 * By default it will pull the latest deployed address from the JSON file.
 *
 * @param {Object} Contract The smart contract build object. Assumed to follow the general structure resulting
 * from compiling via the truffle(ie it has the abi, networks used, etc)
 *
 * @param {String} address optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 */


exports.loadContractIntoLibrary = loadContractIntoLibrary;

var initContract = (state, dispatch) => (props, address) => {
  console.log(props, 'deltadeltadelta');
  var {
    wallet
  } = state;

  if (wallet === undefined || props.abi === undefined) {
    return;
  }

  try {
    // const latestAddress = getLatestDeploymentAddress(Contract);
    var contract = new _ethers.ethers.Contract(props.address, props.abi, wallet);
    dispatch({
      type: _types.INIT_CONTRACT_REQUEST,
      id: props.contractName,
      payload: {
        contract,
        address: props.address
      }
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

exports.initContract = initContract;

var initContractFromLibrary = (state, dispatch) => (_ref3) => {
  var {
    address,
    contractName
  } = _ref3;
  return dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });
};

exports.initContractFromLibrary = initContractFromLibrary;

var generateWallet = (state, dispatch) => () => {
  if (state.wallet) {
    return;
  }

  var randomWallet = _ethers.ethers.Wallet.createRandom();

  var provider = (0, _utilities.networkRouting)('metamask') || (0, _utilities.networkRouting)('json');
  var wallet = new _ethers.ethers.Wallet(randomWallet.privateKey, provider);
  var contracts = (0, _utilities.generateNewContracts)(state.contracts, wallet);
  dispatch({
    type: _types.SET_WALLET,
    payload: {
      wallet,
      address: wallet.address,
      contracts
    }
  });
};

exports.generateWallet = generateWallet;