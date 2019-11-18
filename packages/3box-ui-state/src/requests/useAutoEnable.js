/**
 * @function useAutoEnable
 * @description Auto enable the wallet by sending disaptch to the enable effect.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useAutoEnable = (state, dispatch) => {
	const [dispatched, setDispatched] = useState();

	useEffect(() => {
		if (!dispatched && state.isAutoEnable) {
			dispatch({ type: 'ENABLE_REQUEST' });
			setDispatched(true);
		}
	}, [state.isAutoEnable]);

	return dispatched;
};

/* --- Export --- */
export default useAutoEnable;
