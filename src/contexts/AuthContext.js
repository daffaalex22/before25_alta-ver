import { useEffect, useState, createContext } from 'react'
import { useContext } from 'react';
import auth from '../firebase'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
} from '@firebase/auth';
import { getAuth, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(email)
    }

    useEffect(() => {
        setPersistence(auth, browserLocalPersistence)
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        console.log('current user', currentUser)
    }, [])


    function overridePersistence() {
        return setPersistence(auth, browserSessionPersistence)
    }

    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
        overridePersistence
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;