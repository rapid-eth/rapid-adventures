/* --- Global --- */
import React, { useContext, useReducer, useState } from 'react';

/* --- Module --- */
import Context from './Context';
import reducers from './reducer';
import { enhanceActions } from './middleware/actions';
import { initialize } from './middleware/initialize';

/* --- Effects --- */
import {
  useAutoEnableEffect,
  useAutoRequestProfileEffect,
  useAutoLoginEffect,
  useCloseBoxEffect,
  useDeleteEffect,
  useEnableEffect,
  useGetEffect,
  useGetProfile,
  useGetSpaceEffect,
  useInsertEffect,
  useJoinThreadEffect,
  useOpenBoxEffect,
  useOpenSpaceEffect,
  useRemoveEffect,
  useSetAddressEffect,
  useSetEffect,
  useSetProfileEffect,
  useThreadListenEffect,
  useThreadPostEffect
} from './effects';

/* --- Provider Component --- */
const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(
    reducers,
    initialState
    // initialize({}, {})
  );
  const actions = enhanceActions(state, dispatch);
  console.log(state, 'Box Provider');

  useAutoEnableEffect(state, dispatch);
  useAutoLoginEffect(state, dispatch);
  useAutoRequestProfileEffect(state, dispatch);
  useCloseBoxEffect(state, dispatch);
  useDeleteEffect(state, dispatch);
  useGetEffect(state, dispatch);
  useGetProfile(state, dispatch);
  useGetSpaceEffect(state, dispatch);
  useEnableEffect(state, dispatch);
  useInsertEffect(state, dispatch);
  useJoinThreadEffect(state, dispatch);
  useOpenBoxEffect(state, dispatch);
  useOpenSpaceEffect(state, dispatch);
  useRemoveEffect(state, dispatch);
  useSetAddressEffect(state, dispatch);
  useSetEffect(state, dispatch);
  useSetProfileEffect(state, dispatch);
  useThreadListenEffect(state, dispatch);
  useThreadPostEffect(state, dispatch);

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch: dispatch,
        setConfig: config => ({ ...state.config, ...config }),
        selector: select => state[select],
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
