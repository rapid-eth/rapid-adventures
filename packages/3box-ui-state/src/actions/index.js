import {
	BOOTSTRAP,
	SET_PROVIDER,
	ENABLE_REQUEST,
	LOGIN_REQUEST,
	LOGOUT_REQUEST,
	GET_PROFILE_REQUEST,
	GET_PROFILE_LIST_REQUEST,
	GET_SPACE_REQUEST,
	GET_SPACE_LIST_REQUEST,
	GET_THREAD_REQUEST,
	GET_THREAD_BY_ADDRESS_REQUEST,
	GET_REQUEST,
	SET_REQUEST,
	SET_SINGLE_REQUEST,
	SET_MULTIPLE_REQUEST,
	MERGE_REQUEST,
	REMOVE_REQUEST,
	DELETE_REQUEST,
	LOGIN_SPACE_REQUEST,
	JOIN_THREAD_REQUEST,
	THREAD_POST_REQUEST,
	THREAD_DELETE_POST_REQUEST
} from './types';

/* -------------------------------- */
/* Connect & Authenticate
/* -------------------------------- */
/**
 * @name bootstrap
 * @param {Object} provider
 */
export const bootstrapContext = (state, dispatch) => payload =>
	dispatch({
		type: BOOTSTRAP,
		payload: payload
	});
/**
 * @name setProvider
 * @param {Object} provider
 */
export const setProvider = (state, dispatch) => ({ provider }) =>
	dispatch({
		type: SET_PROVIDER,
		payload: provider
	});

/**
 * @name enableRequest
 * @param {Object} provider
 */
export const enableRequest = (state, dispatch) => () =>
	dispatch({
		type: ENABLE_REQUEST
	});
/**
 * @name loginRequest
 * @param {Object} provider
 */
export const loginRequest = (state, dispatch) => () =>
	dispatch({
		type: LOGIN_REQUEST
	});
/**
 * @name logoutRequest
 * @param {Object} provider
 */
export const logoutRequest = (state, dispatch) => () =>
	dispatch({
		type: LOGOUT_REQUEST
	});

/* -------------------------------- */
/* Stateless
/* -------------------------------- */

/* --- Profiles (https://docs.3box.io/api/profiles#get) --- */
/**
 * @name getProfileRequest
 * @param {Object} provider
 */
export const getProfileRequest = (state, dispatch) => address =>
	dispatch({
		type: GET_PROFILE_REQUEST,
		payload: address.toLowerCase()
	});
/**
 * @name getProfileListRequest
 * @param {Object} provider
 */
export const getProfileListRequest = (state, dispatch) => ({ addresses }) =>
	dispatch({
		type: GET_PROFILE_LIST_REQUEST,
		payload: addresses
	});

/* --- Spaces (https://docs.3box.io/api/storage#get) --- */
/**
 * @name getSpaceRequest
 * @param {Object} provider
 */
export const getSpaceRequest = (state, dispatch) => ({ address, space }) =>
	dispatch({
		type: GET_SPACE_REQUEST,
		payload: {
			address,
			space
		}
	});

/**
 * @name getSpaceListRequest
 * @param {Object} provider
 */
export const getSpaceListRequest = (state, dispatch) => ({ address, space }) =>
	dispatch({
		type: GET_SPACE_LIST_REQUEST,
		payload: {
			address,
			space
		}
	});
/* --- Threads (https://docs.3box.io/api/messaging#static-1) --- */
/**
 * @name getThreadRequest
 * @param {Object} provider
 */
export const getThreadRequest = (state, dispatch) => ({
	space,
	threadName,
	firstModerator,
	members,
	options
}) =>
	dispatch({
		type: GET_THREAD_REQUEST,
		payload: {
			space,
			threadName,
			firstModerator,
			members,
			options
		}
	});
/**
 * @name getThreadRequest
 * @param {Object} provider
 */
export const getThreadByAddressRequest = (state, dispatch) => ({
	threadAddress
}) =>
	dispatch({
		type: GET_THREAD_BY_ADDRESS_REQUEST,
		payload: {
			threadAddress
		}
	});

/**
 * @name threadListenRequest
 * @param {Object} provider
 */
export const threadListenRequest = (state, dispatch) => ({ threadAddress }) =>
	dispatch({
		type: THREAD_LISTEN_REQUEST,
		payload: {
			threadAddress
		}
	});

/* -------------------------------- */
/* Stateful
/* -------------------------------- */
/* --- CRUD --- */
/**
 * @name getRequest
 * @param {Object} provider
 */
export const getRequest = (state, dispatch) => ({ access, key, space }) =>
	dispatch({
		type: GET_REQUEST,
		payload: {
			access,
			key,
			space
		}
	});
/**
 * @name setRequest
 * @param {Object} provider
 */
export const setRequest = (state, dispatch) => ({
	access,
	space,
	key,
	value
}) =>
	dispatch({
		type: SET_REQUEST,
		payload: {
			access,
			space,
			key,
			value
		}
	});
/**
 * @name setSingleRequest
 * @param {Object} provider
 */
export const setSingleRequest = (state, dispatch) => ({
	access,
	space,
	key,
	value
}) =>
	dispatch({
		type: SET_SINGLE_REQUEST,
		payload: {
			access,
			space,
			key,
			value
		}
	});
/**
 * @name setMultipleRequest
 * @param {Object} provider
 */
export const setMultipleRequest = (state, dispatch) => ({
	access,
	space,
	keys,
	values
}) =>
	dispatch({
		type: SET_MULTIPLE_REQUEST,
		payload: {
			access,
			space,
			keys,
			values
		}
	});
/**
 * @name MergeRequest
 * @param {Object} provider
 */
export const mergeRequest = (state, dispatch) => ({
	access,
	space,
	key,
	delta,
	value
}) =>
	dispatch({
		type: MERGE_REQUEST,
		payload: {
			access,
			space,
			delta,
			key,
			value
		}
	});
/**
 * @name removeRequest
 * @param {Object} provider
 */
export const removeRequest = (state, dispatch) => ({ access, space, key }) =>
	dispatch({
		type: REMOVE_REQUEST,
		payload: {
			access,
			space,
			key
		}
	});
/**
 * @name deleteRequest
 * @param {Object} provider
 */
export const deleteRequest = (state, dispatch) => ({
	access,
	space,
	key,
	delta
}) =>
	dispatch({
		type: DELETE_REQUEST,
		payload: {
			access,
			space,
			key,
			delta
		}
	});

/* -------------------------------- */
/* SPACES
/* -------------------------------- */
/**
 * @name openSpaceRequest
 * @param {Object} provider
 */
export const openSpaceRequest = (state, dispatch) => ({ space }) =>
	dispatch({
		type: LOGIN_SPACE_REQUEST,
		payload: {
			space
		}
	});
/* -------------------------------- */
/* Messaging (https://docs.3box.io/api/messaging)
/* -------------------------------- */
/**
 * @name joinThreadRequest
 * @param {Object} provider
 */
export const joinThreadRequest = (state, dispatch) => ({ space }) =>
	dispatch({
		type: JOIN_THREAD_REQUEST,
		payload: {
			space
		}
	});
/**
 * @name threadPostRequest
 * @param {Object} provider
 */
export const threadPostRequest = (state, dispatch) => ({
	space,
	threadName,
	post
}) =>
	dispatch({
		type: THREAD_POST_REQUEST,
		payload: {
			space,
			threadName,
			post
		}
	});
/**
 * @name threadDeletePostRequest
 * @param {Object} provider
 */
export const threadDeletePostRequest = (state, dispatch) => ({
	space,
	threadName,
	postId
}) =>
	dispatch({
		type: THREAD_DELETE_POST_REQUEST,
		payload: {
			space,
			threadName,
			postId
		}
	});
