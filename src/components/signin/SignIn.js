import React, {useState} from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebaseUtils/firebaseUtils";
import FormInput from "../formInput/FormInput";
import Button, {ButtonTypeClass} from "../button/Button";
import { SignInContainer, SignInHeader,ButtonContainer } from "./SignInStyles";

const defaultForm = { 
    email: '',
    password: '',
}

const SignIn = () => {

   const [formFields, setFormFields] = useState(defaultForm)
   const {email, password} = formFields;

   

   const resetForm = () => {
    setFormFields(defaultForm)
   }

    const logGoogleUser = async () => {
    await signInWithGooglePopup();
    
}

   const handleSubmit = async(event) => {
    event.preventDefault();
   
    try{
        await signInAuthUserWithEmailAndPassword(email, password)
        
        resetForm();
    } catch (error){
        switch (error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email')
                break;
            case 'auth/user-not-found':
                alert('no user with this email')
                break;
            default:
                console.log(error)
                break;
            }
        }
    
    }
   const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})

   }
    return(
        <SignInContainer>
            <SignInHeader>Already have an account?</SignInHeader>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>             
                <FormInput label= 'Email' type= 'email' required onChange={handleChange} name='email' value= {email}/>               
                <FormInput label= 'Password' type= 'password'required onChange={handleChange} name='password' value= {password}/>  
                <ButtonContainer>             
                    <Button type= 'submit'>Sign in</Button>
                    <Button type= 'button' buttonType= {ButtonTypeClass.google} onClick={logGoogleUser}>Google sign in</Button>
                </ButtonContainer>
            </form>

        </SignInContainer>
    )
}

export default SignIn;