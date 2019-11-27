"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EthersProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.default;
  }
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
    return _withEthers.default;
  }
});
Object.defineProperty(exports, "EthersInject", {
  enumerable: true,
  get: function get() {
    return _withContextPassed.default;
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

var _Provider = _interopRequireDefault(require("./components/Provider"));

var _Context = _interopRequireDefault(require("./components/Context"));

var _withEthers = _interopRequireDefault(require("./components/withEthers"));

var _withContextPassed = _interopRequireDefault(require("./components/withContextPassed"));

var _ethers = require("ethers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }