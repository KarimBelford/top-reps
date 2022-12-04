import React,{createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener,createUserDocFromAuth} from "../utils/firebaseUtils/firebaseUtils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    
    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user){
                console.log(user)
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubcribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}