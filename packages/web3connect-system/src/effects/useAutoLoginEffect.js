/**
 * @function useAutoLogin
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
const useAutoLogin = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (state.isAutoLogin && state.address) {
			dispatch({ type: 'LOGIN_REQUEST' });
			setDispatched(true);
		}
	}, [state.isAutoLogin, state.address]);

	return dispatched;
};

/* --- Export --- */
export default useAutoLogin;
