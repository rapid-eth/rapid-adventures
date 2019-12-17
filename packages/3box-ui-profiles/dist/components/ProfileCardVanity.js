"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/rapid/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardVanity = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/rapid/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _boxUiSystem = require("3box-ui-system");

var _ProfileImage = require("./ProfileImage");

var _ProfileCover = require("./ProfileCover");

var _ProfileIdentity = require("./ProfileIdentity");

var _ProfileDetailsOccupation = require("./ProfileDetailsOccupation");

/**
 * @function ProfileCard
 * @description Profile Card
 */

/* --- Global --- */
var styles = {
  header: {
    bg: 'night',
    borderRadius: '10px 10px 0 0',
    minHeight: 100
  },
  cover: {
    bg: 'blue',
    borderRadius: '10px 10px 0 0',
    minHeight: 100
  },
  avatar: {
    height: 80,
    mb: 2,
    mt: -60,
    width: 80
  },
  main: {
    bg: 'neutral',
    borderRadius: '0 0 10px 10px',
    border: '1px solid #e0e0e0',
    borderColor: 'borderShadow',
    boxShadow: 0,
    color: 'text',
    p: 3
  }
};
/* --- Component --- */

var ProfileCardVanityView = function ProfileCardVanityView(_ref) {
  var box = _ref.box,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "children"]);
  return _react["default"].createElement(Atom.Box, null, _react["default"].createElement(Atom.Box, {
    sx: styles.header
  }, _react["default"].createElement(_ProfileCover.ProfileCover, {
    sx: styles.cover
  })), _react["default"].createElement(Atom.Flex, {
    center: true,
    column: true,
    sx: styles.main
  }, _react["default"].createElement(_ProfileImage.ProfileImage, {
    variant: "avatar",
    sx: styles.avatar
  }), _react["default"].createElement(_ProfileIdentity.ProfileIdentity, null), _react["default"].createElement(_ProfileDetailsOccupation.ProfileDetailsOccupation, {
    sx: {
      fontSize: 1,
      fontWeight: 300
    }
  }), _react["default"].createElement(_boxUiSystem.Authenticate, null)));
};

var ProfileCardVanity = function ProfileCardVanity(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileCardVanityView, props));
};

exports.ProfileCardVanity = ProfileCardVanity;