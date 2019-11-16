"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadDeletePostRequest = exports.threadPostRequest = exports.joinThreadRequest = exports.openSpaceRequest = exports.deleteRequest = exports.removeRequest = exports.mergeRequest = exports.setMultipleRequest = exports.setSingleRequest = exports.setRequest = exports.getRequest = exports.threadListenRequest = exports.getThreadByAddressRequest = exports.getThreadRequest = exports.getSpaceListRequest = exports.getSpaceRequest = exports.getProfileListRequest = exports.getProfileRequest = exports.logoutRequest = exports.loginRequest = exports.enableRequest = exports.setProvider = void 0;

var _types = require("./types");

/* -------------------------------- */

/* Connect & Authenticate
/* -------------------------------- */

/**
 * @name setProvider
 * @param {Object} provider
 */
var setProvider = (state, dispatch) => (_ref) => {
  var {
    provider
  } = _ref;
  return dispatch({
    type: _types.SET_PROVIDER,
    payload: provider
  });
};
/**
 * @name enableRequest
 * @param {Object} provider
 */


exports.setProvider = setProvider;

var enableRequest = (state, dispatch) => () => dispatch({
  type: _types.ENABLE_REQUEST
});
/**
 * @name loginRequest
 * @param {Object} provider
 */


exports.enableRequest = enableRequest;

var loginRequest = (state, dispatch) => () => dispatch({
  type: _types.LOGIN_REQUEST
});
/**
 * @name logoutRequest
 * @param {Object} provider
 */


exports.loginRequest = loginRequest;

var logoutRequest = (state, dispatch) => () => dispatch({
  type: _types.LOGOUT_REQUEST
});
/* -------------------------------- */

/* Stateless
/* -------------------------------- */

/* --- Profiles (https://docs.3box.io/api/profiles#get) --- */

/**
 * @name getProfileRequest
 * @param {Object} provider
 */


exports.logoutRequest = logoutRequest;

var getProfileRequest = (state, dispatch) => (_ref2) => {
  var {
    address
  } = _ref2;
  return dispatch({
    type: _types.GET_PROFILE_REQUEST,
    payload: address
  });
};
/**
 * @name getProfileListRequest
 * @param {Object} provider
 */


exports.getProfileRequest = getProfileRequest;

var getProfileListRequest = (state, dispatch) => (_ref3) => {
  var {
    addresses
  } = _ref3;
  return dispatch({
    type: _types.GET_PROFILE_LIST_REQUEST,
    payload: addresses
  });
};
/* --- Spaces (https://docs.3box.io/api/storage#get) --- */

/**
 * @name getSpaceRequest
 * @param {Object} provider
 */


exports.getProfileListRequest = getProfileListRequest;

var getSpaceRequest = (state, dispatch) => (_ref4) => {
  var {
    address,
    space
  } = _ref4;
  return dispatch({
    type: _types.GET_SPACE_REQUEST,
    payload: {
      address,
      space
    }
  });
};
/**
 * @name getSpaceListRequest
 * @param {Object} provider
 */


exports.getSpaceRequest = getSpaceRequest;

var getSpaceListRequest = (state, dispatch) => (_ref5) => {
  var {
    address,
    space
  } = _ref5;
  return dispatch({
    type: _types.GET_SPACE_LIST_REQUEST,
    payload: {
      address,
      space
    }
  });
};
/* --- Threads (https://docs.3box.io/api/messaging#static-1) --- */

/**
 * @name getThreadRequest
 * @param {Object} provider
 */


exports.getSpaceListRequest = getSpaceListRequest;

var getThreadRequest = (state, dispatch) => (_ref6) => {
  var {
    space,
    threadName,
    firstModerator,
    members,
    options
  } = _ref6;
  return dispatch({
    type: _types.GET_THREAD_REQUEST,
    payload: {
      space,
      threadName,
      firstModerator,
      members,
      options
    }
  });
};
/**
 * @name getThreadRequest
 * @param {Object} provider
 */


exports.getThreadRequest = getThreadRequest;

var getThreadByAddressRequest = (state, dispatch) => (_ref7) => {
  var {
    threadAddress
  } = _ref7;
  return dispatch({
    type: _types.GET_THREAD_BY_ADDRESS_REQUEST,
    payload: {
      threadAddress
    }
  });
};
/**
 * @name threadListenRequest
 * @param {Object} provider
 */


exports.getThreadByAddressRequest = getThreadByAddressRequest;

var threadListenRequest = (state, dispatch) => (_ref8) => {
  var {
    threadAddress
  } = _ref8;
  return dispatch({
    type: THREAD_LISTEN_REQUEST,
    payload: {
      threadAddress
    }
  });
};
/* -------------------------------- */

/* Stateful
/* -------------------------------- */

/* --- CRUD --- */

/**
 * @name getRequest
 * @param {Object} provider
 */


exports.threadListenRequest = threadListenRequest;

var getRequest = (state, dispatch) => (_ref9) => {
  var {
    access,
    key,
    space
  } = _ref9;
  return dispatch({
    type: _types.GET_REQUEST,
    payload: {
      access,
      key,
      space
    }
  });
};
/**
 * @name setRequest
 * @param {Object} provider
 */


exports.getRequest = getRequest;

var setRequest = (state, dispatch) => (_ref10) => {
  var {
    access,
    space,
    key,
    value
  } = _ref10;
  return dispatch({
    type: _types.SET_REQUEST,
    payload: {
      access,
      space,
      key,
      value
    }
  });
};
/**
 * @name setSingleRequest
 * @param {Object} provider
 */


exports.setRequest = setRequest;

var setSingleRequest = (state, dispatch) => (_ref11) => {
  var {
    access,
    space,
    key,
    value
  } = _ref11;
  return dispatch({
    type: _types.SET_SINGLE_REQUEST,
    payload: {
      access,
      space,
      key,
      value
    }
  });
};
/**
 * @name setMultipleRequest
 * @param {Object} provider
 */


exports.setSingleRequest = setSingleRequest;

var setMultipleRequest = (state, dispatch) => (_ref12) => {
  var {
    access,
    space,
    keys,
    values
  } = _ref12;
  return dispatch({
    type: _types.SET_MULTIPLE_REQUEST,
    payload: {
      access,
      space,
      keys,
      values
    }
  });
};
/**
 * @name MergeRequest
 * @param {Object} provider
 */


exports.setMultipleRequest = setMultipleRequest;

var mergeRequest = (state, dispatch) => (_ref13) => {
  var {
    access,
    space,
    key,
    delta,
    value
  } = _ref13;
  return dispatch({
    type: _types.MERGE_REQUEST,
    payload: {
      access,
      space,
      delta,
      key,
      value
    }
  });
};
/**
 * @name removeRequest
 * @param {Object} provider
 */


exports.mergeRequest = mergeRequest;

var removeRequest = (state, dispatch) => (_ref14) => {
  var {
    access,
    space,
    key
  } = _ref14;
  return dispatch({
    type: _types.REMOVE_REQUEST,
    payload: {
      access,
      space,
      key
    }
  });
};
/**
 * @name deleteRequest
 * @param {Object} provider
 */


exports.removeRequest = removeRequest;

var deleteRequest = (state, dispatch) => (_ref15) => {
  var {
    access,
    space,
    key,
    delta
  } = _ref15;
  return dispatch({
    type: _types.DELETE_REQUEST,
    payload: {
      access,
      space,
      key,
      delta
    }
  });
};
/* -------------------------------- */

/* SPACES
/* -------------------------------- */

/**
 * @name openSpaceRequest
 * @param {Object} provider
 */


exports.deleteRequest = deleteRequest;

var openSpaceRequest = (state, dispatch) => (_ref16) => {
  var {
    space
  } = _ref16;
  return dispatch({
    type: _types.LOGIN_SPACE_REQUEST,
    payload: {
      space
    }
  });
};
/* -------------------------------- */

/* Messaging (https://docs.3box.io/api/messaging)
/* -------------------------------- */

/**
 * @name joinThreadRequest
 * @param {Object} provider
 */


exports.openSpaceRequest = openSpaceRequest;

var joinThreadRequest = (state, dispatch) => (_ref17) => {
  var {
    space
  } = _ref17;
  return dispatch({
    type: _types.JOIN_THREAD_REQUEST,
    payload: {
      space
    }
  });
};
/**
 * @name threadPostRequest
 * @param {Object} provider
 */


exports.joinThreadRequest = joinThreadRequest;

var threadPostRequest = (state, dispatch) => (_ref18) => {
  var {
    space,
    threadName,
    post
  } = _ref18;
  return dispatch({
    type: _types.THREAD_POST_REQUEST,
    payload: {
      space,
      threadName,
      post
    }
  });
};
/**
 * @name threadDeletePostRequest
 * @param {Object} provider
 */


exports.threadPostRequest = threadPostRequest;

var threadDeletePostRequest = (state, dispatch) => (_ref19) => {
  var {
    space,
    threadName,
    postId
  } = _ref19;
  return dispatch({
    type: _types.THREAD_DELETE_POST_REQUEST,
    payload: {
      space,
      threadName,
      postId
    }
  });
};

exports.threadDeletePostRequest = threadDeletePostRequest;