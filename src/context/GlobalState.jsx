import React, { createContext, useReducer } from 'react';
// eslint-disable-next-line import/no-unresolved
import AppReducer from './AppReducer';
// Initial State

const initialState = {
  searchLocation: {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addSearchLocation(location) {
    dispatch({
      type: 'ADD_LOCATION',
      payload: location,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ searchLocation: state.searchLocation, addSearchLocation }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
