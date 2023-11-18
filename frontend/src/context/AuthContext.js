// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken') || null);

  const login = (token) => {
    setUserToken(token);
    localStorage.setItem('userToken', token);
  };

  const logout = () => {
    setUserToken(null);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

