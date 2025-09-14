'use client';

import { createContext, useContext } from 'react';

export interface useUser {
  email: string;
  name: string;
  surname: string;
  favorites?: string[];
}

interface AuthContextType {
  user: useUser | null;
  setUser: (user: useUser | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
