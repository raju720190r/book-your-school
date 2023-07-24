import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app)

  //   user login

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //facebook
  const FacebookProvider = new FacebookAuthProvider();

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, FacebookProvider);
  };

  //  goggle

  const Googleprovider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, Googleprovider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User", currentUser);

      //     // jwt token
      //      if(currentUser){ axios.post('https://infinitymarttialarts.vercel.app/jwt',{email: currentUser.email})
      //      .then(data=>{
      //       console.log(data.data.jwtToken)
      // localStorage.setItem('jwt-access-token', data.data.jwtToken)
      //      })
      //     }

      //     else{
      //       localStorage.removeItem('jwt-access-token')
      //     }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    logIn,
    logOut,
    loading,
    createUser,
    updateUser,
    googleSignIn,
    facebookSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
