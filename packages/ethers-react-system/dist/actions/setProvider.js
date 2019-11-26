"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProvider = void 0;

var _types = require("../types");

var setProvider = (state, dispatch) => (_ref) => {
  var {
    provider
  } = _ref;
  return dispatch({
    type: _types.SET_PROVIDER,
    payload: provider
  });
};

exports.setProvider = setProvider;