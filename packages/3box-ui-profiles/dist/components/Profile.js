"use strict";

var _interopRequireDefault = require("/Users/paws/projects/+ConsenSys/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = void 0;

var _extends2 = _interopRequireDefault(require("/Users/paws/projects/+ConsenSys/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/paws/projects/+ConsenSys/rapid-adventures/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _boxUiState = require("3box-ui-state");

var _utilities = require("../utilities");

/* --- Global --- */

/* ------- Component ------- */
var ProfileSmallView = function ProfileSmallView(_ref) {
  var box = _ref.box,
      address = _ref.address,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "address"]);

  var account = _boxUiState.Selectors.useGetProfile(box, address.toLowerCase());

  return React.createElement(Atom.Box, {
    sx: props.sx
  }, React.createElement(ProfileCard, (0, _extends2["default"])({
    address: address,
    profile: account.data.profile
  }, props)));
};

var ProfileCard = function ProfileCard(props) {
  return props.profile ? React.createElement(AccountActive, {
    profile: props.profile,
    address: props.address,
    disableAddress: props.disableAddress,
    disableName: props.disableName
  }) : React.createElement(AccountInactive, {
    address: props.address,
    disableAddress: props.disableAddress,
    disableName: props.disableName
  });
};
/**
 * @name AccountActive
 * @param {Object} props
 */


var AccountActive = function AccountActive(_ref2) {
  var profile = _ref2.profile,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["profile"]);
  return React.createElement(React.Fragment, null, React.createElement(Atom.Flex, {
    alignCenter: true,
    m1: true
  }, React.createElement(Atom.Flex, {
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
  }, profile.image ? React.createElement(Atom.BackgroundImage, {
    ratio: 0.5,
    src: (0, _utilities.GenerateImage)(profile.image)
  }) : React.createElement(Atom.BackgroundImage, {
    ratio: 0.5,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), !props.disableName && React.createElement(Atom.Box, {
    ml: 10
  }, React.createElement(Molecule.Link, {
    to: "/dashboard/profile/".concat(props.address)
  }, React.createElement(Atom.Heading, {
    md: true,
    sx: {
      m: 0
    }
  }, profile.name)), !props.disableAddress && React.createElement(Atom.Span, {
    sx: {
      fontSize: [0],
      m: 0
    }
  }, (0, _utilities.shortenAddress)(props.address, 7)))));
};

AccountActive.defaultProps = {
  disableName: false
};

/**
 * @name AccountInactive
 * @param {*} param0
 */
var AccountInactive = function AccountInactive(props) {
  return React.createElement(Atom.Flex, {
    alignCenter: true
  }, React.createElement(Atom.Span, null, React.createElement(Atom.Image, {
    circle: true,
    src: "https://static.thenounproject.com/png/2348501-200.png",
    sx: {
      bg: 'white',
      width: 32,
      p: 0
    }
  })), React.createElement(Atom.Box, {
    ml: 10
  }, !props.disableAddress && React.createElement(Atom.Span, {
    sx: {
      fontSize: [0, 0, 1],
      m: 0
    }
  }, (0, _utilities.shortenAddress)(props.address, 7))));
};

var Profile = function Profile(props) {
  return React.createElement(_boxUiState.BoxInject, null, React.createElement(ProfileSmallView, props));
};

exports.Profile = Profile;