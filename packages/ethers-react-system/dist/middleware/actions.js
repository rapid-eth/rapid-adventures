"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceActions = void 0;

var actions = _interopRequireWildcard(require("../actions"));

var _types = require("../actions/types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var keys = Object.keys(actions);

var enhanceActions = (state, dispatch) => {
  var enhanced = {};
  keys.forEach(action => {
    var actionCreator = actions[action];
    enhanced[action] = actionCreator(state, dispatch);
  });
  return enhanced;
};

exports.enhanceActions = enhanceActions;