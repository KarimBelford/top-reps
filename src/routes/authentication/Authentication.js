import React from "react";
import Register from "../../components/register/Register";
import SignIn from "../../components/signin/SignIn";
import { AuthenticationContainer } from "./AuthenticationStyles";

const Authentication = () =>{
    return (
        <AuthenticationContainer>
            <SignIn/>
            <Register/>
        </AuthenticationContainer>
    )
}

export default Authentication