import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // token 
      if(currentUser){
        
     
        axios.post('https://altinfohub.vercel.app/jwt',loggedUser,{withCredentials: true})
        .then(res=>{
          // console.log('toekn',res.data);
        })
      }else{
        axios.post('https://altinfohub.vercel.app/logout',loggedUser,{withCredentials:true})
        .then(res=>{
          // console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    createUser,
    signIn,
    loading,
    googleLogIn,
    
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
