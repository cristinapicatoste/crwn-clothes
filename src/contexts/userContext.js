import React, { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firabase.utils';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [userLogged, setUserLogged] = useState({
        user: ''
    });
    console.log(userLogged);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUserLogged(user)
            console.log(user);
        })
    }, [auth]);

    const handleLoggout = () => {
        auth.onAuthStateChanged(() => setUserLogged(null));
    }


    return <UserContext.Provider value={{
        userLogged,
        setUserLogged,
        handleLoggout,
    }}>{children}</UserContext.Provider>
}