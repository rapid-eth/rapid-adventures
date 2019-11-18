/**
 * @function useGetProfile
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useGetProfile = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (state.store && state.store.profiles) {
			const selected = state.store.profiles[0];
			if (selected) {
				const runEffect = async () => {
					console.log(selected, 'sdsfasdas');
					const profile = await state.static.getProfile(
						selected.payload
					);
					const verified = await state.static.getVerifiedAccounts(
						profile
					);
					profile.verifications = verified;
					profile.address = selected.address;
					dispatch({
						type: 'GET_PROFILE_SUCCESS',
						address: selected.payload,
						payload: profile,
						id: selected
					});
					setDispatched(true);
				};
				runEffect();
			}
		}
	}, [state.store.profiles]);

	return dispatched;
};
