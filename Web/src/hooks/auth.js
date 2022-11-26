import React, {
  useContext,
  createContext,
  useMemo,
} from 'react';
import decode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  function setToken(newToken) {
    localStorage.setItem('token', newToken);
  }

  function unsetToken() {
    localStorage.removeItem('token');
  }

  const isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  function isLoggedIn() {
    const token = localStorage.getItem('token');
    if ((token && token !== '') && !isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  function decodedToken() {
    try {
      const token = localStorage.getItem('token');
      return decode(token);
    } catch (err) {
      return null;
    }
  }

  return (
    <AuthContext.Provider value={useMemo(() => ({
      setToken,
      unsetToken,
      isLoggedIn,
      decodedToken,
    }), [])}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
