"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deployContractFromBytecode = void 0;

var _utilities = require("../utilities");

var _types = require("../types");

var deployContractFromBytecode = (state, dispatch) => (abi, bytecode, delta) => dispatch({
  type: _types.DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST,
  input: bytecode,
  delta: delta || (0, _utilities.hashCode)(abi)
});

exports.deployContractFromBytecode = deployContractFromBytecode;