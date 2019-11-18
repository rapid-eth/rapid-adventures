/**
 * @function useGetProfile
 * @description Get Profile
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useGetProfile = (state, addressPassed) => {
	const [address] = useState(addressPassed);
	const [dispatchInit, setDispatchInit] = useState(false);

	const [isDispatched, setDispatched] = useState(false);
	const [profile, setProfile] = useState(false);

	useEffect(() => {
		const requests = state.store.profiles.filter(
			item => item.payload === address.toLowerCase()
		);
		console.log(requests, 'wffd');
		if (requests.length === 0) setDispatchInit(true);
	}, [state.store]);

	useEffect(() => {
		if (dispatchInit && !state['@'][address]) {
			state.getProfileRequest(address);
			setDispatched(true);
		}
	}, [dispatchInit, address]);

	useEffect(() => {
		if (state['@'][address]) {
			console.log(state['@'][address], 'profileGot');
			setProfile(state['@'][address]);
		}
	}, [state['@'][address]]);

	return {
		requested: isDispatched,
		data: profile
	};
};

/* --- Export --- */
export default useGetProfile;
