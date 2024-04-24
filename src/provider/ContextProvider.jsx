import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import axios from 'axios'

export const AppContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState(null)


    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            if (currentUser && currentUser?.email) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(data => console.log('token', data))
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(data => { console.log('token response', data) })
            }
            setLoading(false)
        })
        return () => {
            return unSubscribe;
        }
    }, [user?.email])


    const info = {
        user,
        facebookLogin,
        googleLogin,
        loading,
        setLoading,
        isOpen,
        setIsOpen,
        logOut
    }

    return (
        <AppContext.Provider value={info}>
            {children}
        </AppContext.Provider>
    )
};

export default ContextProvider;