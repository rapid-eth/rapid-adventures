"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useAutoLogin
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useAutoLogin = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.isAutoLogin && state.address) {
      dispatch({
        type: 'LOGIN_REQUEST'
      });
      setDispatched(true);
    }
  }, [state.isAutoLogin, state.address]);
  return dispatched;
};
/* --- Export --- */


var _default = useAutoLogin;
exports.default = _default;