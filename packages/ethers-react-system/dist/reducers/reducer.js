"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _types = require("../actions/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducerActions = (state, action) => {
  var {
    input,
    delta,
    id,
    payload,
    type
  } = action;

  switch (type) {
    case _types.SET_PROVIDER:
      return _objectSpread({}, state, {
        provider: payload
      });

    case _types.SET_PROVIDER_STATUS:
      return _objectSpread({}, state, {
        providerStatus: payload
      });

    case _types.SET_ADDRESS:
      return _objectSpread({}, state, {
        address: input
      });

    case _types.SET_WALLET:
      return _objectSpread({}, state, {
        address: payload.address,
        wallet: payload.wallet,
        contracts: payload.contracts
      });

    case _types.SEND_TRANSACTION_REQUEST:
      return _objectSpread({}, state, {
        signatures: _objectSpread({}, state.signatures, {
          [id]: payload
        })
      });

    case _types.SIGN_TYPED_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: [...state.store.messages, _objectSpread({}, action)]
        })
      });

    case _types.SIGN_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        messages: {
          [id]: payload
        }
      });

    /* ----------------------- */

    /* Contract Initialize     */

    /* ----------------------- */

    case INIT_CONTRACT:
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

    case _types.DEPLOY_CONTRACT_REQUEST:
      return _objectSpread({}, state, {
        contracts: _objectSpread({}, state.contracts, {
          [id]: payload.contract
        })
      });

    case _types.DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            id: delta || (0, _utilities.hashCode)(input)
          }]
        })
      });

    default:
      throw new Error("No Reducer Type Set: ".concat(action.type));
  }
};

var _default = reducerActions;
exports.default = _default;