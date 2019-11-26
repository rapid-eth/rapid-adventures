"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = exports.SET_ADDRESS = exports.SET_WALLET = exports.SEND_TRANSACTION_FAILURE = exports.SEND_TRANSACTION_SUCCESS = exports.SEND_TRANSACTION_REQUEST = exports.SIGN_TRANSACTION_FAILURE = exports.SIGN_TRANSACTION_SUCCESS = exports.SIGN_TRANSACTION_REQUEST = exports.SIGN_MESSAGE_FAILURE = exports.SIGN_MESSAGE_SUCCESS = exports.SIGN_MESSAGE_REQUEST = exports.SIGN_TYPED_MESSAGE_FAILURE = exports.SIGN_TYPED_MESSAGE_SUCCESS = exports.SIGN_TYPED_MESSAGE_REQUEST = exports.DEPLOY_CONTRACT_FROM_BYTECODE_FAILURE = exports.DEPLOY_CONTRACT_FROM_BYTECODE_SUCCESS = exports.DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST = exports.DEPLOY_CONTRACT_FAILURE = exports.DEPLOY_CONTRACT_SUCCESS = exports.DEPLOY_CONTRACT_REQUEST = exports.INIT_CONTRACT_FAILURE = exports.INIT_CONTRACT_SUCCESS = exports.INIT_CONTRACT_REQUEST = exports.ENABLE_FAILURE = exports.ENABLE_SUCCESS = exports.ENABLE_REQUEST = exports.SET_PROVIDER_STATUS = exports.SET_PROVIDER = void 0;
// * Set Actions
var SET_PROVIDER = 'SET_PROVIDER';
exports.SET_PROVIDER = SET_PROVIDER;
var SET_PROVIDER_STATUS = 'SET_PROVIDER_STATUS';
exports.SET_PROVIDER_STATUS = SET_PROVIDER_STATUS;
var ENABLE_REQUEST = 'ENABLE_REQUEST';
exports.ENABLE_REQUEST = ENABLE_REQUEST;
var ENABLE_SUCCESS = 'ENABLE_SUCCESS';
exports.ENABLE_SUCCESS = ENABLE_SUCCESS;
var ENABLE_FAILURE = 'ENABLE_FAILURE'; // * Init actions

exports.ENABLE_FAILURE = ENABLE_FAILURE;
var INIT_CONTRACT_REQUEST = 'INIT_CONTRACT_REQUEST';
exports.INIT_CONTRACT_REQUEST = INIT_CONTRACT_REQUEST;
var INIT_CONTRACT_SUCCESS = 'INIT_CONTRACT_SUCCESS';
exports.INIT_CONTRACT_SUCCESS = INIT_CONTRACT_SUCCESS;
var INIT_CONTRACT_FAILURE = 'INIT_CONTRACT_FAILURE'; // * Deploy actions

exports.INIT_CONTRACT_FAILURE = INIT_CONTRACT_FAILURE;
var DEPLOY_CONTRACT_REQUEST = 'DEPLOY_CONTRACT_REQUEST';
exports.DEPLOY_CONTRACT_REQUEST = DEPLOY_CONTRACT_REQUEST;
var DEPLOY_CONTRACT_SUCCESS = 'DEPLOY_CONTRACT_SUCCESS';
exports.DEPLOY_CONTRACT_SUCCESS = DEPLOY_CONTRACT_SUCCESS;
var DEPLOY_CONTRACT_FAILURE = 'DEPLOY_CONTRACT_FAILURE';
exports.DEPLOY_CONTRACT_FAILURE = DEPLOY_CONTRACT_FAILURE;
var DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST = 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST';
exports.DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST = DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST;
var DEPLOY_CONTRACT_FROM_BYTECODE_SUCCESS = 'DEPLOY_CONTRACT_FROM_BYTECODE_SUCCESS';
exports.DEPLOY_CONTRACT_FROM_BYTECODE_SUCCESS = DEPLOY_CONTRACT_FROM_BYTECODE_SUCCESS;
var DEPLOY_CONTRACT_FROM_BYTECODE_FAILURE = 'DEPLOY_CONTRACT_FROM_BYTECODE_FAILURE'; // * Sign actions

exports.DEPLOY_CONTRACT_FROM_BYTECODE_FAILURE = DEPLOY_CONTRACT_FROM_BYTECODE_FAILURE;
var SIGN_TYPED_MESSAGE_REQUEST = 'SIGN_TYPED_MESSAGE_REQUEST';
exports.SIGN_TYPED_MESSAGE_REQUEST = SIGN_TYPED_MESSAGE_REQUEST;
var SIGN_TYPED_MESSAGE_SUCCESS = 'SIGN_TYPED_MESSAGE_SUCCESS';
exports.SIGN_TYPED_MESSAGE_SUCCESS = SIGN_TYPED_MESSAGE_SUCCESS;
var SIGN_TYPED_MESSAGE_FAILURE = 'SIGN_TYPED_MESSAGE_FAILURE';
exports.SIGN_TYPED_MESSAGE_FAILURE = SIGN_TYPED_MESSAGE_FAILURE;
var SIGN_MESSAGE_REQUEST = 'SIGN_MESSAGE';
exports.SIGN_MESSAGE_REQUEST = SIGN_MESSAGE_REQUEST;
var SIGN_MESSAGE_SUCCESS = 'SIGN_MESSAGE_SUCCESS';
exports.SIGN_MESSAGE_SUCCESS = SIGN_MESSAGE_SUCCESS;
var SIGN_MESSAGE_FAILURE = 'SIGN_MESSAGE_FAILURE';
exports.SIGN_MESSAGE_FAILURE = SIGN_MESSAGE_FAILURE;
var SIGN_TRANSACTION_REQUEST = 'SIGN_TRANSACTION_REQUEST';
exports.SIGN_TRANSACTION_REQUEST = SIGN_TRANSACTION_REQUEST;
var SIGN_TRANSACTION_SUCCESS = 'SIGN_TRANSACTION_SUCCESS';
exports.SIGN_TRANSACTION_SUCCESS = SIGN_TRANSACTION_SUCCESS;
var SIGN_TRANSACTION_FAILURE = 'SIGN_TRANSACTION_FAILURE';
exports.SIGN_TRANSACTION_FAILURE = SIGN_TRANSACTION_FAILURE;
var SEND_TRANSACTION_REQUEST = 'SEND_TRANSACTION_REQUEST';
exports.SEND_TRANSACTION_REQUEST = SEND_TRANSACTION_REQUEST;
var SEND_TRANSACTION_SUCCESS = 'SEND_TRANSACTION_SUCCESS';
exports.SEND_TRANSACTION_SUCCESS = SEND_TRANSACTION_SUCCESS;
var SEND_TRANSACTION_FAILURE = 'SEND_TRANSACTION_FAILURE'; // * Wallet

exports.SEND_TRANSACTION_FAILURE = SEND_TRANSACTION_FAILURE;
var SET_WALLET = 'SET_WALLET';
exports.SET_WALLET = SET_WALLET;
var SET_ADDRESS = 'SET_ADDRESS';
exports.SET_ADDRESS = SET_ADDRESS;
var Action = {};
var ActionType = {
  SET_PROVIDER: 'SET_PROVIDER',
  SET_PROVIDER_STATUS: 'SET_PROVIDER_STATUS',
  INIT_CONTRACT: 'INIT_CONTRACT',
  DEPLOY_CONTRACT: 'DEPLOY_CONTRACT',
  SIGN_TYPED_MESSAGE: 'SIGN_TYPED_MESSAGE',
  SIGN_MESSAGE: 'SIGN_MESSAGE',
  SEND_TRANSACTION: 'SEND_TRANSACTION',
  SET_WALLET: 'SET_WALLET',
  SET_ADDRESS: 'SET_ADDRESS'
};
exports.ActionType = ActionType;