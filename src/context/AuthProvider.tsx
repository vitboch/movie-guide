'use client';

import { useEffect, useState } from 'react';
import { AuthContext, useUser } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<useUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const updateUser = (newUserData: useUser | null) => {
    setUser(newUserData);
    if (newUserData) {
      localStorage.setItem('user', JSON.stringify(newUserData));
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
