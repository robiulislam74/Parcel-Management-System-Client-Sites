import React, { createContext, useEffect, useState } from 'react'
import auth from '../../FireBase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()

    const createSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleWithLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutFun = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const currentUserFunc = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser?.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('secret-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('secret-token');
                setLoading(false);
            }

        });
        return () => currentUserFunc()
    }, [axiosPublic])


    const info = {
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