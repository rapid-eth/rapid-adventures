"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useEnableSelector = void 0;

var _react = require("react");

/**
 * @function useEnableSelector
 */
var useEnableSelector = state => {
  var [isEnabled, setEnabled] = (0, _react.useState)(false);
  var [isDispatched, setDispatched] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (state.isEnableRequested) setDispatched(true);
  }, [state.isEnableRequested]);
  (0, _react.useEffect)(() => {
    if (state.isEnableSuccess) setEnabled(true);
  }, [state.isEnableSuccess]);
  return {
    ready: isEnabled,
    dispatched: isDispatched
  };
};

exports.useEnableSelector = useEnableSelector;
var Selectors = {
  useEnableSelector
};
var _default = Selectors;
exports.default = _default;