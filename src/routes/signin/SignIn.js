import React from "react";
import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebaseUtils/firebaseUtils";
import Register from "../../components/register/Register";

const SignIn = () =>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();  
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}> Sign in with Google </button>
            <Register/>
        </div>
    )
}

export default SignIn