import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../libs/firebase";

interface UserAuthContextType {
  user: any;
  logIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<any>;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(undefined);

export function UserAuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, logIn, logOut, signUp }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuthContext() {
  const context = useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error("useUserAuthContext must be used within a UserAuthContextProvider");
  }
  return context;
}
