"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/rapid/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileSmall = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/rapid/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/rapid/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _utilities = require("../utilities");

/* --- Global Dependencies --- */

/* ------- Component ------- */
var ProfileSmallView = function ProfileSmallView(_ref) {
  var box = _ref.box,
      address = _ref.address,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "address"]);

  var account = _boxUiState.Selectors.useGetProfile(box, address.toLowerCase());

  return _react["default"].createElement(Atom.Box, {
    sx: props.sx
  }, _react["default"].createElement(ProfileCard, (0, _extends2["default"])({
    address: address,
    profile: account.data.profile
  }, props)));
};

var ProfileCard = function ProfileCard(_ref2) {
  var profile = _ref2.profile,
      small = _ref2.small,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["profile", "small"]);
  return profile ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Atom.Flex, {
    alignCenter: true
  }, _react["default"].createElement(Atom.Flex, {
    circle: true,
    center: true,
    column: true,
    sx: {
      boxShadow: 0,
      border: '1px solid #FFF',
      overflow: 'hidden',
      width: 32,
      height: 32
    }
  }, profile.image ? _react["default"].createElement(Atom.BackgroundImage, {
    ratio: 0.5,
    src: (0, _utilities.GenerateImage)(profile.image)
  }) : _react["default"].createElement(Atom.BackgroundImage, {
    ratio: 0.5,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), !props.disableName && _react["default"].createElement(Atom.Box, {
    ml: 10
  }, _react["default"].createElement(Molecule.Link, {
    to: "/dashboard/wprofile/".concat(props.address)
  }, _react["default"].createElement(Atom.Heading, {
    md: true,
    sx: {
      m: 0
    }
  }, (0, _idx["default"])(profile, function (_) {
    return _.name;
  })))))) : _react["default"].createElement(Atom.Flex, {
    alignCenter: true
  }, _react["default"].createElement(Atom.Span, null, _react["default"].createElement(Atom.Image, {
    circle: true,
    src: "https://static.thenounproject.com/png/2348501-200.png",
    sx: {
      width: 32,
      p: 0
    }
  })), _react["default"].createElement(Atom.Box, {
    ml: 10
  }, _react["default"].createElement(Atom.Heading, {
    sx: {
      m: 0
    }
  }, (0, _utilities.shortenAddress)(props.address, 7))));
};

var ProfileSmall = function ProfileSmall(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileSmallView, props));
};

exports.ProfileSmall = ProfileSmall;