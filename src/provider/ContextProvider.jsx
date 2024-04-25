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
    const [isShow, setIsShow] = useState(false)


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
                axios.post(`${import.meta.env.VITE_api_url}/jwt`, loggedUser, { withCredentials: true })
                    .then(data => console.log('token', data))
            }
            else {
                axios.post(`${import.meta.env.VITE_api_url}/logout`, loggedUser, { withCredentials: true })
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
        isShow,
        setIsShow,
        logOut
    }

    return (
        <AppContext.Provider value={info}>
            {children}
        </AppContext.Provider>
    )
};

export default ContextProvider;