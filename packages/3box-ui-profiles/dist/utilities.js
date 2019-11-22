"use strict";

var _interopRequireDefault = require("/Users/paws/projects/+ConsenSys/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortenAddress = shortenAddress;
exports["default"] = exports.isAddress = exports.GenerateImagefromHash = exports.GenerateImage = void 0;

var _idx = _interopRequireDefault(require("idx"));

var GenerateImage = function GenerateImage(image) {
  var IPFSFile = function IPFSFile(hash) {
    return "https://ipfs.io/ipfs/".concat(hash);
  };

  var imageipfs = (0, _idx["default"])(image, function (_) {
    return _[0].contentUrl['/'];
  }) ? IPFSFile((0, _idx["default"])(image, function (_) {
    return _[0].contentUrl['/'];
  })) : null;
  return imageipfs;
};

exports.GenerateImage = GenerateImage;

var GenerateImagefromHash = function GenerateImagefromHash(image) {
  return "https://ipfs.io/ipfs/".concat(image);
};

exports.GenerateImagefromHash = GenerateImagefromHash;

function shortenAddress(address, num) {
  var showEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!address) return null;
  return "".concat(address.slice(0).slice(0, num), "...").concat(showEnd ? address.slice(0).slice(-num) : '');
}
/**
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */


var isAddress = function isAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return true;
  }
};

exports.isAddress = isAddress;
var _default = {
  isAddress: isAddress,
  shortenAddress: shortenAddress
};
exports["default"] = _default;