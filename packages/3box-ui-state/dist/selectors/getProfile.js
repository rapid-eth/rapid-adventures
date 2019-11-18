"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useGetProfile = void 0;

var _react = require("react");

/**
 * @function useGetProfile
 * @description Auto enable the wallet by sending disaptch to the enable effect.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useGetProfile = (actions, config) => {
  var [isSet, setStatus] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    actions.bootstrapContext(config);
    setStatus(true);
  }, [config]);
  return isSet;
};
/* --- Export --- */


exports.useGetProfile = useGetProfile;
var _default = useGetProfile;
exports.default = _default;