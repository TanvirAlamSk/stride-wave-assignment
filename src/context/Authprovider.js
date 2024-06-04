import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const userUpdate = () => {

    // }

    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("recipe-easy-token")
                toast.success("LogOut Successful")
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const unSubscriber = () => {
            setLoader(true)
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoader(false)
            })
        }
        return () => unSubscriber()
    }, [])


    const value = { user, loader, setUser, setLoader, createUser, userLogin, googleSignIn, logout }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;