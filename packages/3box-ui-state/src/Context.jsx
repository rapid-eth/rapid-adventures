/**
 * @name 3BoxContext
 */
/* --- Global --- */
import { createContext } from 'react';
import box from '3box';

/* --- Components --- */
const Context = createContext({
  '@': {},
  static: box,
  utils: box.idUtils,
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
    add: [], // Add Moderator or Member
    deletes: [], // Delete Item from Storage (Space) index (key)
    inserts: [], // Insert Item from Storage (Space) index (key)
    listens: [], // Listen for thread updates on callback.
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

export default Context;
