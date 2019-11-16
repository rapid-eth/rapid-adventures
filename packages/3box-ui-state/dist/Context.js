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
 * @description Initialize 3Box context.
 */

/* --- Global --- */

/* --- Components --- */
var Context = (0, _react.createContext)({
  // Authentiation data storage.
  '@': {},
  extensions: {},
  auth: {
    instance: undefined,
    spaces: {},
    threads: {}
  },
  // Register onUpdate (thread listening) requests.
  listeners: {},
  listening: {},
  // Middleware for requests to 3Box.
  requests: [],
  // Manage dispatched requests.
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
  profile: {},
  // Library
  instance: _box.default,
  // Login initializes instances.
  static: _box.default,
  utils: _box.default.idUtils,
  // Global Helpers
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  // Boolean
  isInitialized: false,
  isRequestOpen: false,
  isEnableAuto: false,
  // Request ETH Address
  isLoginAuto: false,
  // Request 3Box Login
  isRequestProfileAuto: true,
  // Request Profile Auto
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isDebugging: false,

  /* --- Functions --- */
  enable: () => {},
  login: () => {},
  logout: () => {},
  addRequest: () => {},
  confirmRequest: () => {},
  confirmAllRequests: () => {},
  openSpace: () => {},
  listSpaces: () => {},
  subscribedThreads: () => {},
  getThread: () => {},
  getThreadByAddress: () => {},
  getConfig: () => {},
  getVerifiedAccounts: () => {},
  joinThread: () => {},
  joinThreadByAddress: () => {},
  threadPost: () => {},
  threadPostDelete: () => {},
  threadListen: () => {},
  threadAddModerator: () => {},
  threadAddMember: () => {},
  getProfile: () => {},
  lookupProfile: () => {},
  rejectRequest: () => {},
  verified: () => {},
  get: () => {},
  remove: () => {},
  removeItem: () => {},
  set: () => {},
  setMultiple: () => {},
  listAddressLinks: () => {},
  isAddressLinked: () => {},
  linkAddress: () => {},
  removeAddressList: () => {}
});
var _default = Context;
exports.default = _default;