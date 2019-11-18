/* --- Global --- */
import React, { useContext, useReducer } from 'react';

/* --- Module --- */
import Context from './Context';
import reducers from './reducer';
import { enhanceActions } from './middleware/actions';
import { initialize } from './middleware/initialize';

/* --- Effects --- */
import { useBootstrap } from './effects';
import * as SideEffects from './requests';

/* --- Provider Component --- */
const Provider = ({ config, ...props }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);

  /* --- Initialize Side Effects --- */
  Object.values(SideEffects).map(effect => effect(state, dispatch));

  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);
  useBootstrap(actions, config);
  console.log(state, 'Box Provider');
  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
      }}
      {...props}
    />
  );
};
export default Provider;
