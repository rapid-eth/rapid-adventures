"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTransactionRequest = void 0;

var _types = require("../types");

var sendTransactionRequest = (state, dispatch) => (contractID, functionName, params) => {
  var contract = state.contracts[contractID];
  var contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    dispatch({
      type: _types.SIGN_TRANSACTION_REQUEST,
      input: tx
    });
  });
};

exports.sendTransactionRequest = sendTransactionRequest;