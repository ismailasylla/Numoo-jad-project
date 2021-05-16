import React, {useReducer, createContext} from 'react';
import { ContextProps } from './interfaces';
import defaultContext from "./defaultContext";

interface Props {
  state: any;
  dispatch: (type: any) => void;
}
const AppContext = createContext<Props>({} as Props);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "reset":
      return defaultContext;
    case "setLang":
      return {
        ...state, 
        siteLang: action.siteLang
      }
  }
}

function AppProvider({ children }: ContextProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = {
    state, 
    dispatch 
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

const AppContextConsumer = AppContext.Consumer;

export { 
  AppContext, 
  AppProvider, 
  AppContextConsumer 
}