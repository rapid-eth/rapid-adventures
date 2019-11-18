/**
 * @function useBootstrap
 * @description Auto enable the wallet by sending disaptch to the enable effect.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useBootstrap = (actions, config) => {
	const [isSet, setStatus] = useState();

	useEffect(() => {
		actions.bootstrapContext(config);
		setStatus(true);
	}, [config]);

	return isSet;
};

/* --- Export --- */
export default useBootstrap;
