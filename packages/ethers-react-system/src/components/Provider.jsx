/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, { useContext, useReducer } from 'react';
import Context from '../Context';
import reducers from '../reducer';
import { enhanceActions } from '../middleware/actions';
import { initializeContracts } from '../middleware/initialize';
import * as RequestEffects from '../requests';

const Provider = ({ children, contracts = [], provider }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    reducers,
    initialState
    // initializeContracts(contracts, provider)
  );
  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);

  /* --- Request Effects --- */
  Object.values(RequestEffects).map(effect => effect(state, dispatch));

  /* --- Developer Messages --- */
  console.log(state, 'Ethers Provider');

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
