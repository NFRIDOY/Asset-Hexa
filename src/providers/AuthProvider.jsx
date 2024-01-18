import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from './../utility/Firebase/firebase.config';
import PropTypes from 'prop-types'; // ES6


export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    /**
     * Create User By Email & Pass
     * Sign in with email and password
     * Sign in with google 
     */
    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    /**
     * Logout
     */
    const logOut = () => {
        setLoading(true)
        alert("User Signed Out!!!")
        return signOut(auth)
    }

    /**
     * UseEffect for user 
     */

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("unSubscribe")
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                // User is signed in
                const loggedInUser = { email: currentUser.email };

                console.log(loggedInUser)

                // TODO: get token
            } else {
                // User is signed out
                // alert("User Signed Out!!!")

            }
        })

        return () => {
            unSubscribe()
        }
    }, [user])

    const contextInfo = { user, setUser, loading, setLoading, createUserEmailPass, signInEmailPass, googleSignIn, logOut }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
}

// export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}