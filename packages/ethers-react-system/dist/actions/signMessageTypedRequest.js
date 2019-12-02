"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signMessageTyped = void 0;

var _utilities = require("../utilities");

var _types = require("../types");

var signMessageTyped = (state, dispatch) => (_ref) => {
  var {
    message,
    delta
  } = _ref;
  return dispatch({
    type: _types.WALLET_SIGN_TYPED_MESSAGE_REQUEST,
    payload: message,
    id: delta || (0, _utilities.hashCode)(message.toString())
  });
};

exports.signMessageTyped = signMessageTyped;