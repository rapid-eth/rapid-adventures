"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _box = _interopRequireDefault(require("3box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 3BoxContext
 */

/* --- Global --- */

/* --- Components --- */
var Context = (0, _react.createContext)({
  '@': {},
  static: _box.default,
  utils: _box.default.idUtils,
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  isInitialized: false,
  isRequestOpen: false,
  isAutoEnable: false,
  isAutoLogin: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isDebugging: false,
  auth: {
    instance: undefined,
    spaces: {},
    threads: {}
  },
  store: {
    add: [],
    // Add Moderator or Member
    deletes: [],
    // Delete Item from Storage (Space) index (key)
    inserts: [],
    // Insert Item from Storage (Space) index (key)
    listens: [],
    // Listen for thread updates on callback.
    extensions: [],
    gets: [],
    open: {},
    posts: [],
    profiles: [],
    removes: [],
    sets: [],
    spaces: [],
    threads: [],
    threadsGet: []
  },

  /* --- Stateless --- */
  getProfileRequest: () => {},
  getThreadRequest: () => {},
  getThreadByAddressRequest: () => {},
  getVerifiedAccountsRequest: () => {},

  /* --- Authentication --- */
  enableRequest: () => {},
  loginRequest: () => {},
  logoutRequest: () => {},

  /* --- Statefull --- */
  openSpaceRequest: () => {},
  listSpacesRequest: () => {},
  subscribedThreadsRequest: () => {},
  // Storage Stateful
  getRequest: () => {},
  setRequest: () => {},
  setSingleRequest: () => {},
  setMultipleRequest: () => {},
  removeRequest: () => {},
  deleteRequest: () => {},
  // Thread Stateful
  joinThreadRequest: () => {},
  joinThreadByAddressRequest: () => {},
  threadPostRequest: () => {},
  threadPostDeleteRequest: () => {},
  threadListenRequest: () => {},
  threadAddModeratorRequest: () => {},
  threadAddMemberRequest: () => {}
});
var _default = Context;
exports.default = _default;