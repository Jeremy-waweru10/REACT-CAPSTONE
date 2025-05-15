import React, { createContext, useContext, useState, useEffect } from 'react';
//create Context
const AuthContext = createContext();

export function AuthProvider({ children }) {//wraps the whole app or parts of it and provides the context to its children.
  const [user, setUser] = useState(null);//logged-in status

  useEffect(() => {
    const stored = localStorage.getItem('user');//checks if the user is saved in localStorage
    if (stored) setUser(JSON.parse(stored));//If yes, it loads that user into state using setUser()
  }, []);

  const login = (username) => {
    const u = { username };
    setUser(u);//saves in state  (setUser).
    localStorage.setItem('user', JSON.stringify(u));//Also saves it in localStorage to keep them logged in.
  };

  const logout = () => {
    setUser(null);//clears
    localStorage.removeItem('user');//Removes user data from localStorage.
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
