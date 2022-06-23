import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const login = (user) => {
    setuser(user);
  };

  const logout = () => {
    setuser(null);
  };

  return (
    <Context.Provider value={{ user, login, logout }}>
      {children}
    </Context.Provider>
  );
};
