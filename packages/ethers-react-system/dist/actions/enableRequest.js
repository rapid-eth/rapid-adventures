"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableRequest = void 0;

var _types = require("../types");

var enableRequest = (state, dispatch) => () => dispatch({
  type: _types.ENABLE_REQUEST
});

exports.enableRequest = enableRequest;