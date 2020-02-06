import React from 'react';
import useLocalStorage from "./util/useLocalStorage";

const ProgressContext = React.createContext();

const defaultValues = {
  loggedQuests: [],
  completedQuests: [],
};

export const ProgressProvider = props => {
  const [progress, setProgress] = useLocalStorage('progress', defaultValues);
  console.log('progress', progress);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {props.children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext