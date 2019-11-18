"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = exports.ActionsInit = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _actions = require("./middleware/actions");

var _initialize = require("./middleware/initialize");

var _effects = require("./effects");

var SideEffects = _interopRequireWildcard(require("./requests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- Provider Component --- */
var ActionsInit = (_ref) => {
  var {
    config
  } = _ref,
      props = _objectWithoutProperties(_ref, ["config"]);

  var initialState = (0, _react.useContext)(_Context.default);
  var [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState);
  Object.values(SideEffects).map(effect => effect(state, dispatch));
  var actions = (0, _actions.enhanceActions)(state, dispatch);
  (0, _effects.useBootstrap)(actions, config);
  return actions;
};

exports.ActionsInit = ActionsInit;
var Actions = ActionsInit({});
exports.Actions = Actions;