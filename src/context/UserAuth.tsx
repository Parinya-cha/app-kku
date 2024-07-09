import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../libs/firebase";

interface UserAuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
}

const UserAuthContext = createContext<UserAuthContextType>({ user: null, login: async () => {} });

export function UserAuth({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

 

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("currentuser", currentuser);
      setUser(currentuser);
    })

    
    return () => {
        unsubscribe();
    }
  }, []);

  return (
    <UserAuthContext.Provider value={{ user , logIn , signUp ,logout }}>
      {children}
    </UserAuthContext.Provider>
  );
}
