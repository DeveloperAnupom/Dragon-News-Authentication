import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // Create A User .........
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In A User .........
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut The User .........
    const logOutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    // Observed The User .......
    useEffect(() => {
        
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubsCribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logInUser,
        logOutUser,
        loading,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;