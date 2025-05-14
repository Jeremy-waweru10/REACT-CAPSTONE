import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { username, email, password }
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('flashcardUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Login - accepts full user credentials
  const login = ({ username, email, password }) => {
    const newUser = { username, email, password };
    setUser(newUser);
    localStorage.setItem('flashcardUser', JSON.stringify(newUser));
  };

  // Logout - clear user and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('flashcardUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook to access context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


