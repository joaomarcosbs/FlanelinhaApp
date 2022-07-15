import React, { createContext, useContext, useState } from "react";
import { onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};




export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  
  const signOutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };


  const contextValue = {
    user,
    loading,
    error,
    signOutUser,
    forgotPassword,
  };


  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};