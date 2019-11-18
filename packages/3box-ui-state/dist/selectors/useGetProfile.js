"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useGetProfile = void 0;

var _react = require("react");

/**
 * @function useGetProfile
 * @description Get Profile
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useGetProfile = (state, address) => {
  var [isDispatched, setDispatched] = (0, _react.useState)(false);
  var [profile, setProfile] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    state.getProfileRequest(address);
    setDispatched(true);
  }, [address]);
  (0, _react.useEffect)(() => {
    if (state['@'][address]) {
      console.log(state['@'][address], 'profileGot');
      setProfile(state['@'][address]);
    }
  }, [state['@'][address]]);
  return {
    requested: isDispatched,
    data: profile
  };
};
/* --- Export --- */


exports.useGetProfile = useGetProfile;
var _default = useGetProfile;
exports.default = _default;