import React, {useState} from "react";
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebaseUtils/firebaseUtils";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import './SignIn.scss'

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
    const {user} = await signInWithGooglePopup();  
    await createUserDocFromAuth(user);
}

   const handleSubmit = async(event) => {
    event.preventDefault();
   
    try{
       const response = await signInAuthUserWithEmailAndPassword(email, password)
       console.log(response)
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
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>             
                <FormInput label= 'Email' type= 'email' required onChange={handleChange} name='email' value= {email}/>               
                <FormInput label= 'Password' type= 'password'required onChange={handleChange} name='password' value= {password}/>  
                <div className='buttons-container'>             
                    <Button type= 'submit'>Sign in</Button>
                    <Button type= 'button' buttonType='google' onClick={logGoogleUser}>Google sign in</Button>
                </div>
            </form>

        </div>
    )
}

export default SignIn;