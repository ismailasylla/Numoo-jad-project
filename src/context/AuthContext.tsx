import React, { useContext, useState, useEffect, createContext } from 'react';
import { ContextProps } from './interfaces';
import { auth } from '../config';

interface Props {
  currentUser: any;
  signup: (email: string, password: string) => void;
  signin: (email: string, password: string) => void;
  signout: () => void;
}
const AuthContext = createContext<Props>({} as Props);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: ContextProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function signin(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { 
  useAuth, 
  AuthProvider
}