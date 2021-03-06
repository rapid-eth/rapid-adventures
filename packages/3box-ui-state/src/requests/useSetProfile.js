/**
 * @function useSetProfileEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useSetProfile= (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (state.address) {
			state.static.getProfile(state.address).then(profile => {
				dispatch({
					type: 'SET_PROFILE',
					profile
				});
				setDispatched(true);
			});
		}
	}, [state.address]);

	return dispatched;
};
