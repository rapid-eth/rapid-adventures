"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THREAD_DELETE_POST_FAILURE = exports.THREAD_DELETE_POST_SUCCESS = exports.THREAD_DELETE_POST_REQUEST = exports.THREAD_POST_FAILURE = exports.THREAD_POST_SUCCESS = exports.THREAD_POST_REQUEST = exports.JOIN_THREAD_FAILURE = exports.JOIN_THREAD_SUCCESS = exports.JOIN_THREAD_REQUEST = exports.LOGIN_SPACE_FAILURE = exports.LOGIN_SPACE_SUCCESS = exports.LOGIN_SPACE_REQUEST = exports.DELETE_FAILURE = exports.DELETE_SUCCESS = exports.DELETE_REQUEST = exports.REMOVE_FAILURE = exports.REMOVE_SUCCESS = exports.REMOVE_REQUEST = exports.MERGE_FAILURE = exports.MERGE_SUCCESS = exports.MERGE_REQUEST = exports.SET_MULTIPLE_FAILURE = exports.SET_MULTIPLE_SUCCESS = exports.SET_MULTIPLE_REQUEST = exports.SET_SINGLE_FAILURE = exports.SET_SINGLE_SUCCESS = exports.SET_SINGLE_REQUEST = exports.SET_FAILURE = exports.SET_SUCCESS = exports.SET_REQUEST = exports.GET_FAILURE = exports.GET_SUCCESS = exports.GET_REQUEST = exports.THREAD_LIST_FAILURE = exports.THREAD_LIST_SUCCESS = exports.THREAD_LIST_REQUEST = exports.GET_THREAD_BY_ADDRESS_FAILURE = exports.GET_THREAD_BY_ADDRESS_SUCCESS = exports.GET_THREAD_BY_ADDRESS_REQUEST = exports.GET_THREAD_FAILURE = exports.GET_THREAD_SUCCESS = exports.GET_THREAD_REQUEST = exports.GET_SPACE_LIST_FAILURE = exports.GET_SPACE_LIST_SUCCESS = exports.GET_SPACE_LIST_REQUEST = exports.GET_SPACE_FAILURE = exports.GET_SPACE_SUCCESS = exports.GET_SPACE_REQUEST = exports.GET_PROFILE_LIST_FAILURE = exports.GET_PROFILE_LIST_SUCCESS = exports.GET_PROFILE_LIST_REQUEST = exports.GET_PROFILE_FAILURE = exports.GET_PROFILE_SUCCESS = exports.GET_PROFILE_REQUEST = exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = exports.ENABLE_FAILURE = exports.ENABLE_SUCCESS = exports.ENABLE_REQUEST = exports.SET_PROVIDER = void 0;
var SET_PROVIDER = 'SET_PROVIDER';
exports.SET_PROVIDER = SET_PROVIDER;
var ENABLE_REQUEST = 'ENABLE_REQUEST';
exports.ENABLE_REQUEST = ENABLE_REQUEST;
var ENABLE_SUCCESS = 'ENABLE_SUCCESS';
exports.ENABLE_SUCCESS = ENABLE_SUCCESS;
var ENABLE_FAILURE = 'ENABLE_FAILURE';
exports.ENABLE_FAILURE = ENABLE_FAILURE;
var LOGIN_REQUEST = 'LOGIN_REQUEST';
exports.LOGIN_REQUEST = LOGIN_REQUEST;
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_FAILURE = 'LOGIN_FAILURE';
exports.LOGIN_FAILURE = LOGIN_FAILURE;
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
exports.LOGOUT_REQUEST = LOGOUT_REQUEST;
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
exports.LOGOUT_SUCCESS = LOGOUT_SUCCESS;
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
exports.LOGOUT_FAILURE = LOGOUT_FAILURE;
var GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
exports.GET_PROFILE_REQUEST = GET_PROFILE_REQUEST;
var GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
exports.GET_PROFILE_SUCCESS = GET_PROFILE_SUCCESS;
var GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
exports.GET_PROFILE_FAILURE = GET_PROFILE_FAILURE;
var GET_PROFILE_LIST_REQUEST = 'GET_PROFILE_LIST_REQUEST';
exports.GET_PROFILE_LIST_REQUEST = GET_PROFILE_LIST_REQUEST;
var GET_PROFILE_LIST_SUCCESS = 'GET_PROFILE_LIST_SUCCESS';
exports.GET_PROFILE_LIST_SUCCESS = GET_PROFILE_LIST_SUCCESS;
var GET_PROFILE_LIST_FAILURE = 'GET_PROFILE_LIST_FAILURE';
exports.GET_PROFILE_LIST_FAILURE = GET_PROFILE_LIST_FAILURE;
var GET_SPACE_REQUEST = 'GET_SPACE_REQUEST';
exports.GET_SPACE_REQUEST = GET_SPACE_REQUEST;
var GET_SPACE_SUCCESS = 'GET_SPACE_SUCCESS';
exports.GET_SPACE_SUCCESS = GET_SPACE_SUCCESS;
var GET_SPACE_FAILURE = 'GET_SPACE_FAILURE';
exports.GET_SPACE_FAILURE = GET_SPACE_FAILURE;
var GET_SPACE_LIST_REQUEST = 'GET_SPACE_LIST_REQUEST';
exports.GET_SPACE_LIST_REQUEST = GET_SPACE_LIST_REQUEST;
var GET_SPACE_LIST_SUCCESS = 'GET_SPACE_LIST_SUCCESS';
exports.GET_SPACE_LIST_SUCCESS = GET_SPACE_LIST_SUCCESS;
var GET_SPACE_LIST_FAILURE = 'GET_SPACE_LIST_FAILURE';
exports.GET_SPACE_LIST_FAILURE = GET_SPACE_LIST_FAILURE;
var GET_THREAD_REQUEST = 'GET_THREAD_REQUEST';
exports.GET_THREAD_REQUEST = GET_THREAD_REQUEST;
var GET_THREAD_SUCCESS = 'GET_THREAD_SUCCESS';
exports.GET_THREAD_SUCCESS = GET_THREAD_SUCCESS;
var GET_THREAD_FAILURE = 'GET_THREAD_FAILURE';
exports.GET_THREAD_FAILURE = GET_THREAD_FAILURE;
var GET_THREAD_BY_ADDRESS_REQUEST = 'GET_THREAD_BY_ADDRESS_REQUEST';
exports.GET_THREAD_BY_ADDRESS_REQUEST = GET_THREAD_BY_ADDRESS_REQUEST;
var GET_THREAD_BY_ADDRESS_SUCCESS = 'GET_THREAD_BY_ADDRESS_SUCCESS';
exports.GET_THREAD_BY_ADDRESS_SUCCESS = GET_THREAD_BY_ADDRESS_SUCCESS;
var GET_THREAD_BY_ADDRESS_FAILURE = 'GET_THREAD_BY_ADDRESS_FAILURE';
exports.GET_THREAD_BY_ADDRESS_FAILURE = GET_THREAD_BY_ADDRESS_FAILURE;
var THREAD_LIST_REQUEST = 'THREAD_LIST_REQUEST';
exports.THREAD_LIST_REQUEST = THREAD_LIST_REQUEST;
var THREAD_LIST_SUCCESS = 'THREAD_LIST_SUCCESS';
exports.THREAD_LIST_SUCCESS = THREAD_LIST_SUCCESS;
var THREAD_LIST_FAILURE = 'THREAD_LIST_FAILURE';
exports.THREAD_LIST_FAILURE = THREAD_LIST_FAILURE;
var GET_REQUEST = 'GET_REQUEST';
exports.GET_REQUEST = GET_REQUEST;
var GET_SUCCESS = 'GET_SUCCESS';
exports.GET_SUCCESS = GET_SUCCESS;
var GET_FAILURE = 'GET_FAILURE';
exports.GET_FAILURE = GET_FAILURE;
var SET_REQUEST = 'SET_REQUEST';
exports.SET_REQUEST = SET_REQUEST;
var SET_SUCCESS = 'SET_SUCCESS';
exports.SET_SUCCESS = SET_SUCCESS;
var SET_FAILURE = 'SET_FAILURE';
exports.SET_FAILURE = SET_FAILURE;
var SET_SINGLE_REQUEST = 'SET_SINGLE_REQUEST';
exports.SET_SINGLE_REQUEST = SET_SINGLE_REQUEST;
var SET_SINGLE_SUCCESS = 'SET_SINGLE_SUCCESS';
exports.SET_SINGLE_SUCCESS = SET_SINGLE_SUCCESS;
var SET_SINGLE_FAILURE = 'SET_SINGLE_FAILURE';
exports.SET_SINGLE_FAILURE = SET_SINGLE_FAILURE;
var SET_MULTIPLE_REQUEST = 'SET_MULTIPLE_REQUEST';
exports.SET_MULTIPLE_REQUEST = SET_MULTIPLE_REQUEST;
var SET_MULTIPLE_SUCCESS = 'SET_MULTIPLE_SUCCESS';
exports.SET_MULTIPLE_SUCCESS = SET_MULTIPLE_SUCCESS;
var SET_MULTIPLE_FAILURE = 'SET_MULTIPLE_FAILURE';
exports.SET_MULTIPLE_FAILURE = SET_MULTIPLE_FAILURE;
var MERGE_REQUEST = 'MERGE_REQUEST';
exports.MERGE_REQUEST = MERGE_REQUEST;
var MERGE_SUCCESS = 'MERGE_SUCCESS';
exports.MERGE_SUCCESS = MERGE_SUCCESS;
var MERGE_FAILURE = 'MERGE_FAILURE';
exports.MERGE_FAILURE = MERGE_FAILURE;
var REMOVE_REQUEST = 'REMOVE_REQUEST';
exports.REMOVE_REQUEST = REMOVE_REQUEST;
var REMOVE_SUCCESS = 'REMOVE_SUCCESS';
exports.REMOVE_SUCCESS = REMOVE_SUCCESS;
var REMOVE_FAILURE = 'REMOVE_FAILURE';
exports.REMOVE_FAILURE = REMOVE_FAILURE;
var DELETE_REQUEST = 'DELETE_REQUEST';
exports.DELETE_REQUEST = DELETE_REQUEST;
var DELETE_SUCCESS = 'DELETE_SUCCESS';
exports.DELETE_SUCCESS = DELETE_SUCCESS;
var DELETE_FAILURE = 'DELETE_FAILURE';
exports.DELETE_FAILURE = DELETE_FAILURE;
var LOGIN_SPACE_REQUEST = 'LOGIN_SPACE_REQUEST';
exports.LOGIN_SPACE_REQUEST = LOGIN_SPACE_REQUEST;
var LOGIN_SPACE_SUCCESS = 'LOGIN_SPACE_SUCCESS';
exports.LOGIN_SPACE_SUCCESS = LOGIN_SPACE_SUCCESS;
var LOGIN_SPACE_FAILURE = 'LOGIN_SPACE_FAILURE';
exports.LOGIN_SPACE_FAILURE = LOGIN_SPACE_FAILURE;
var JOIN_THREAD_REQUEST = 'JOIN_THREAD_REQUEST';
exports.JOIN_THREAD_REQUEST = JOIN_THREAD_REQUEST;
var JOIN_THREAD_SUCCESS = 'JOIN_THREAD_SUCCESS';
exports.JOIN_THREAD_SUCCESS = JOIN_THREAD_SUCCESS;
var JOIN_THREAD_FAILURE = 'JOIN_THREAD_FAILURE';
exports.JOIN_THREAD_FAILURE = JOIN_THREAD_FAILURE;
var THREAD_POST_REQUEST = 'THREAD_POST_REQUEST';
exports.THREAD_POST_REQUEST = THREAD_POST_REQUEST;
var THREAD_POST_SUCCESS = 'THREAD_POST_SUCCESS';
exports.THREAD_POST_SUCCESS = THREAD_POST_SUCCESS;
var THREAD_POST_FAILURE = 'THREAD_POST_FAILURE';
exports.THREAD_POST_FAILURE = THREAD_POST_FAILURE;
var THREAD_DELETE_POST_REQUEST = 'THREAD_DELETE_POST_REQUEST';
exports.THREAD_DELETE_POST_REQUEST = THREAD_DELETE_POST_REQUEST;
var THREAD_DELETE_POST_SUCCESS = 'THREAD_DELETE_POST_SUCCESS';
exports.THREAD_DELETE_POST_SUCCESS = THREAD_DELETE_POST_SUCCESS;
var THREAD_DELETE_POST_FAILURE = 'THREAD_DELETE_POST_FAILURE';
exports.THREAD_DELETE_POST_FAILURE = THREAD_DELETE_POST_FAILURE;