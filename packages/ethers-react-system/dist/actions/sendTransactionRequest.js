"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTRANSACTION_REQUEST = void 0;

var _types = require("../types");

var sendTRANSACTION_REQUEST = (state, dispatch) => (contractID, functionName, params) => {
  var contract = state.contracts[contractID];
  var contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    dispatch({
      type: _types.WALLET_SIGN_TRANSACTION_REQUEST,
      input: tx
    });
  });
};

exports.sendTRANSACTION_REQUEST = sendTRANSACTION_REQUEST;