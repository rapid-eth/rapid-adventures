"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("./utilities");

var _types = require("./types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducerActions = (state, action) => {
  var {
    delta,
    id,
    payload,
    type,
    error
  } = action;

  switch (type) {
    /* ----------------------- */

    /*         Common          */

    /* ----------------------- */
    case _types.ENABLE_REQUEST:
      return _objectSpread({}, state, {
        isEnableRequested: true
      });

    case _types.ENABLE_SUCCESS:
      return _objectSpread({}, state, {
        isEnableSuccess: true,
        isEnableRequested: false
      });

    case _types.ENABLE_FAILURE:
      return _objectSpread({}, state, {
        isEnableRequested: false,
        isEnableSuccess: false
      });

    case _types.SET_PROVIDER:
      return _objectSpread({}, state, {
        providers: payload
      });

    case _types.SET_PROVIDER_STATUS:
      return _objectSpread({}, state, {
        providerStatus: payload
      });

    case _types.SET_ADDRESS:
      return _objectSpread({}, state, {
        address: payload
      });

    case _types.BALANCE_SET:
      return _objectSpread({}, state, {
        balance: payload
      });

    case _types.NONCE_SET:
      return _objectSpread({}, state, {
        nonce: payload
      });

    case _types.NETWORK_SET:
      return _objectSpread({}, state, {
        network: payload
      });

    case _types.ENS_ADDRESS_SET:
      return _objectSpread({}, state, {
        ensAddress: payload
      });

    /* ----------------------- */

    /*         Signer          */

    /* ----------------------- */

    case _types.SIGNER_GET_REQUEST:
      return _objectSpread({}, state);

    case _types.SIGNER_GET_SUCCESS:
      return _objectSpread({}, state, {
        wallet: payload
      });

    case _types.SIGNER_GET_FAILURE:
      return _objectSpread({}, state);

    /* ----------------------- */

    /*         Wallet          */

    /* ----------------------- */

    case _types.WALLET_PROVIDER_GET_SUCCESS:
      return _objectSpread({}, state, {
        injected: payload
      });

    case _types.SET_WALLET:
      return _objectSpread({}, state);

    case _types.SET_WALLET_FAILURE:
      return _objectSpread({}, state);

    case _types.WALLET_SEND_TRANSACTION_REQUEST:
      return _objectSpread({}, state, {
        signatures: _objectSpread({}, state.signatures, {
          [id]: payload
        })
      });

    case _types.WALLET_SIGN_TYPED_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: [...state.store.messages, _objectSpread({}, action)]
        })
      });

    case _types.WALLET_SIGN_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        messages: {
          [id]: payload
        }
      });

    /* ----------------------- */

    /* Contract Initialize     */

    /* ----------------------- */

    case _types.INIT_CONTRACT_REQUEST:
      var {
        address,
        contract
      } = payload;
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          contracts: []
        }),
        contracts: _objectSpread({}, state.contracts, {
          [id]: _objectSpread({
            id,
            address
          }, contract)
        })
      });

    /* ----------------------- */

    /* Contract Deployment     */

    /* ----------------------- */

    case _types.CONTRACT_DEPLOY_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            id: delta
          }]
        }),
        contracts: _objectSpread({}, state.contracts, {
          [id]: payload.contract
        })
      });

    case _types.CONTRACT_DEPLOY_SUCCESS:
      return _objectSpread({}, state);

    case _types.CONTRACT_DEPLOY_FAILURE:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: []
        })
      });

    case _types.CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            id: delta
          }]
        })
      });

    default:
      // return { ...state };
      throw new Error("No Reducer Type Set: ".concat(action.type));
  }
};

var _default = reducerActions;
exports.default = _default;