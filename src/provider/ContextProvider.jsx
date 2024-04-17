import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

export const AppContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
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
            setLoading(false)

            return () => {
                return unSubscribe;
            }
        })
    }, [])


    const info = {
        user,
        facebookLogin,
        googleLogin,
        loading,
        setLoading,
        logOut
    }

    return (
        <AppContext.Provider value={info}>
            {children}
        </AppContext.Provider>
    )
};

export default ContextProvider;