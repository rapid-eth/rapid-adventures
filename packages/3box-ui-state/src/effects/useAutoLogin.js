/**
 * @function useAutoLogin
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useAutoLogin = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (state.isLoginAuto && state.address) {
			dispatch({ type: 'LOGIN_REQUEST' });
			setDispatched(true);
		}
	}, [state.isLoginAuto, state.address]);

	return dispatched;
};
