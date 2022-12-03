import React, {useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebaseUtils/firebaseUtils";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import './Register.scss'

const defaultForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {

   const [formFields, setFormFields] = useState(defaultForm)
   const {displayName, email, password, confirmPassword} = formFields;

   const resetForm = () => {
    setFormFields(defaultForm)
   }

   const handleSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword){
        alert('passwords do not match');
        return
    }

    try{
        const {user} = await createAuthUserWithEmailAndPassword(
            email,
            password
        );

        await createUserDocFromAuth(user, {displayName});
        resetForm();
    } catch (error){
        if(error.code === 'auth/email-already-in-use'){
           alert('Email Already in use') 
        }else{
            console.log('error',error)
        }
       
    }
    
   }
   const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})

   }
    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Register with your email and password</span>
            <form onSubmit={handleSubmit}>             
                <FormInput label='Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label= 'Email' type= 'email' required onChange={handleChange} name='email' value= {email}/>               
                <FormInput label= 'Password' type= 'password'required onChange={handleChange} name='password' value= {password}/>               
                <FormInput label= 'Confirm Password' type= 'password' required onChange={handleChange} name='confirmPassword' value= {confirmPassword}/>
                <Button type= 'submit'>Register</Button>
            </form>

        </div>
    )
}

export default Register;