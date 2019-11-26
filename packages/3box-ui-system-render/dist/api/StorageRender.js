"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _uiCompose = require("@horizin/ui-compose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- Component --- */
var StorageRender = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var storage = _boxUiState.Effects.useStorageRetrieveEffect(box, props);

  var space = _boxUiState.Effects.useGetSpaceEffect(box, props);

  var address = '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d';
  console.log(address, props.space, 'box.address, props.space');
  (0, _react.useEffect)(() => {
    box.static.getSpace(address, props.space).then(res => {
      console.log(res, 'spssccca');
    });
  }, [props.index]);
  return !storage.data ? null : props.isList ? _react.default.createElement(_uiCompose.ListObjectValues, {
    data: storage.data,
    pass: props.pass,
    component: props.component
  }) : (0, _uiCompose.Component)(props.component, _objectSpread({}, storage.data, {}, props.pass));
};

StorageRender.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: false,
  isRefresh: true
};
StorageRender.propTypes = {
  address: _propTypes.default.string,
  canRequestData: _propTypes.default.bool,
  component: _propTypes.default.func.isRequired,
  selector: _propTypes.default.string,
  space: _propTypes.default.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(StorageRender, props));

exports.default = _default;