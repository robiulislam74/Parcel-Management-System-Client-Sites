import React, { createContext, useEffect, useState } from 'react'
import auth from '../../FireBase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleWithLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutFun = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const currentUser = onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
        });
       return ()=> currentUser()
      },[])
  

    const info ={
        user,
        loading,
        createSignUp,
        signInUser,
        signOutFun,
        googleWithLogin
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider