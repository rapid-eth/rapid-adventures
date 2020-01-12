"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("../Context"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = require("../middleware/actions");

var _initialize = require("../middleware/initialize");

var RequestEffects = _interopRequireWildcard(require("../requests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Provider = (_ref) => {
  var {
    children,
    contracts = [],
    provider
  } = _ref;

  /* --- Ethers Context --- */
  var initialState = (0, _react.useContext)(_Context.default);
  /* --- Reducer --- */

  var [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState // initializeContracts(contracts, provider)
  );
  /* --- Enhance Actions --- */

  var actions = (0, _actions.enhanceActions)(state, dispatch);
  /* --- Request Effects --- */

  Object.values(RequestEffects).map(effect => effect(state, dispatch));
  /* --- Developer Messages --- */

  console.log(state, 'Ethers Provider');
  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {}, actions, {
      dispatch
    })
  }, children);
};

var _default = Provider;
exports.default = _default;