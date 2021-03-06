"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ethers = require("ethers");

/**
 * @name EthersContext
 * @description Initialize Ethers context.
 */

/**
 * @typedef Context @memberof React.Context
 * @property {Object} instance
 * @property {Object} store
 * @property {Object} contracts
 * @property {Object} library
 * @property {Array} deployed
 * @property {Object} signatures
 * @property {String} address
 * @property {String} addressShortened
 * @property {String} addressTrimmed
 * @property {String} wallet
 * @property {Function} enable
 * @property {Function} loadContractIntoLibrary
 * @property {Function} initContract
 * @property {Function} initContractFromLibrary
 * @property {Function} deployContract
 * @property {Function} deployContractFromBytecode
 * @property {Function} setProvider
 * @property {Function} setProviderStatus
 * @property {Function} signMessage
 * @property {Function} signMessageTyped
 */
var Context = (0, _react.createContext)({
  instance: _ethers.ethers,
  address: undefined,
  balance: undefined,
  network: undefined,
  nonce: undefined,
  providers: undefined,
  wallet: undefined,
  contracts: {},
  signatures: {},
  deployed: [],
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    transactions: [],
    wallets: []
  },
  enableRequest: () => {},
  contractDeployRequest: () => {},
  contractDeployFromBytecodeRequest: () => {},
  contractInitializeRequest: () => {},
  walletSendTransactionRequest: () => {},
  walletSignMessageRequest: () => {},
  walletSignMessageTypedRequest: () => {},
  walletSignTransactionRequest: () => {}
});
var _default = Context;
exports.default = _default;