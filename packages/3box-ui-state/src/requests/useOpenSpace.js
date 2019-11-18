/**
 * @function useOpenSpaceEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useOpenSpace = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (state.instance && state.store && state.store.open) {
			const selected = state.store.open[0];
			if (selected) {
				try {
					const runEffect = async () => {
						let threads;
						console.log(selected, 'opening space');
						const space = await state.auth.instance.openSpace(
							selected.space
						);
						if (space.all) {
							threads = await space.subscribedThreads();
						}
						dispatch({
							type: 'LOGIN_SPACE_SUCCESS',
							instance: space,
							space: selected.space,
							threads
						});
						setDispatched(true);
					};
					runEffect();
				} catch (error) {
					dispatch({
						type: 'LOGIN_SPACE_FAILURE',
						payload: error,
						space: selected.space
					});
					setDispatched(false);
				}
			}
		}
	}, [state.store.open]);

	return dispatched;
};
