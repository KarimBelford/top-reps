import React,{createContext, useEffect, useReducer} from "react";
import { onAuthStateChangedListener,createUserDocFromAuth} from "../utils/firebaseUtils/firebaseUtils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state,action) => {
    
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }       
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const {currentUser} = state
    

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = {currentUser, setCurrentUser}
    
    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user){
                
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubcribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

