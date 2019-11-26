"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deployContractRequest = void 0;

var _types = require("../types");

var deployContractRequest = (state, dispatch) => (_ref) => {
  var {
    contract,
    delta,
    values
  } = _ref;
  return dispatch({
    type: _types.DEPLOY_CONTRACT_REQUEST,
    payload: {
      contract,
      values
    },
    delta: delta || contract && contract.contractName
  });
};

exports.deployContractRequest = deployContractRequest;