import React, { useContext, useReducer } from 'react';
import adventureList from './data/adventureList.json'
import questList from './data/questList.json'

const DataContext = React.createContext({
  adventures: adventureList,
  quests: questList
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return { ...state }
    }
  }
}
export default DataContext

export const DataProvider = ({ children }) => {
  const initialState = useContext(DataContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}