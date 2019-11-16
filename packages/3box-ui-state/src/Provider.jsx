/* --- Global --- */
import React, { useContext, useReducer } from 'react';

/* --- Module --- */
import Context from './Context';
import reducers from './reducer';
import { enhanceActions } from './middleware/actions';
import { initialize } from './middleware/initialize';

/* --- Effects --- */
import * as SideEffects from './effects';

/* --- Provider Component --- */
const Provider = props => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);

  /* --- Initialize Side Effects --- */
  Object.values(SideEffects).map(effect => effect(state, dispatch));

  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);

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
