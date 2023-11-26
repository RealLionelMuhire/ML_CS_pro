// src/context/AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import store from '../store';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: { user } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return { isAuthenticated, user, login, logout };
};

export { AuthProvider, useAuth };
