"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddExtension = void 0;

var _react = require("react");

/**
 * @function useAddExtension
 * @description Add extension to 3Box State
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useAddExtension = function useAddExtension(state, dispatch) {
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!dispatched && !state.extensions[extension.name]) {
      if (extension.name === 'walletconnect') {
        var QR = extension.components.qr;
        var walletConnector = extension.loader.init(extension); // Initialize Listeners

        extension.listeners.init(walletConnector, extension, dispatch);
        extension.listeners.update(walletConnector, extension, dispatch);
        window.listen = extension.listeners.disconnect(walletConnector, extension, dispatch);
        window.listen = extension.listeners.connect(walletConnector, extension, dispatch);
        window.listen = extension.listeners.callRequest(walletConnector);
        var id = 'walletconnect';
        dispatch({
          type: 'EXTENSION_ADD_SUCCESS',
          id: id,
          payload: {
            events: [],
            instance: walletConnector
          }
        });
      } // setDispatched(extension);

    }
  }, [state.isAutoEnable]);
  return dispatched;
};

exports.useAddExtension = useAddExtension;