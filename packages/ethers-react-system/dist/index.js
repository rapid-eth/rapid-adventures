"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EthersContext", {
  enumerable: true,
  get: function get() {
    return _Context.default;
  }
});
Object.defineProperty(exports, "withEthers", {
  enumerable: true,
  get: function get() {
    return _withContext.default;
  }
});
Object.defineProperty(exports, "EthersProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "EthersInject", {
  enumerable: true,
  get: function get() {
    return _Inject.default;
  }
});
Object.defineProperty(exports, "ethers", {
  enumerable: true,
  get: function get() {
    return _ethers.ethers;
  }
});
exports.Selectors = void 0;

var Selectors = _interopRequireWildcard(require("./selectors"));

exports.Selectors = Selectors;

var _Context = _interopRequireDefault(require("./Context"));

var _withContext = _interopRequireDefault(require("./withContext"));

var _Provider = _interopRequireDefault(require("./components/Provider"));

var _Inject = _interopRequireDefault(require("./components/Inject"));

var _ethers = require("ethers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }