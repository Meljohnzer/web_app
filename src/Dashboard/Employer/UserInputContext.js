// UserInputContext.js

import React, { createContext, useContext, useState } from 'react';

const UserInputContext = createContext();

export const useUserInput = () => useContext(UserInputContext);

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({});

  const updateUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <UserInputContext.Provider value={{ userInput, updateUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};
