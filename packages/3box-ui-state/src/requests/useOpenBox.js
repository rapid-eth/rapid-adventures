/**
 * @function useOpenBoxEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useOpenBox = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		try {
			if (state.isLoggingIn) {
				const runEffect = async () => {
					const instance = await state.static.openBox(
						state.address,
						window.web3.currentProvider
					);
					const profile = await state.static.getProfile(
						state.address
					);
					const list = await state.static.listSpaces(state.address);
					const verified = await state.static.getVerifiedAccounts(
						profile
					);
					let spaces = {};

					list.forEach(e => {
						spaces[e] = undefined;
					}); // Create empty space objects list.

					dispatch({
						type: 'SET_ADDRESS',
						address: state.address
					});
					dispatch({
						type: 'LOGIN_SUCCESS',
						profile,
						instance,
						spaces,
						verified
					});
					setDispatched(true);
				};
				runEffect();
			}
		} catch (error) {
			dispatch({
				type: 'LOGIN_FAILURE',
				err: error
			});
			setDispatched(false);
		}
	}, [state.isLoggingIn]);

	return dispatched;
};
