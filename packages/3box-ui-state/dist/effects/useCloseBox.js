"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCloseBox = void 0;

var _react = require("react");

/**
 * @function useCloseBoxEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useCloseBox = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.isLoggingOut) {
      try {
        state.instance.logout().then(res => {
          dispatch({
            type: 'LOGOUT_SUCCESS'
          });
          setDispatched(true);
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: 'LOGOUT_FAILURE'
        });
        setDispatched(false);
      }
    }
  }, [state.isLoggingOut]);
  return dispatched;
};

exports.useCloseBox = useCloseBox;