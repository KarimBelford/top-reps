import React from "react";
import Register from "../../components/register/Register";
import SignIn from "../../components/signin/SignIn";
import './Authentication.scss'

const Authentication = () =>{
    


    return (
        <div className='authentication-container'>
            <SignIn/>
            <Register/>
        </div>
    )
}

export default Authentication