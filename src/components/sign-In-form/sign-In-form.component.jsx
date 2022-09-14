import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button.component";
import './sign-In-form-styles.scss'
import { connectFirestoreEmulator } from "firebase/firestore";


const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
        resetFormFields()
       
        }
        catch(err){
            switch (err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                    case 'auth/user-not-found':
                        alert('no user attached with this email');
                        break;
                        default:
                            console.log(err);
            }
        }

    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({
            ...formFields, [name]:value
        })
    }

    return (
        <div className="sign-up-container">
            <h2>Already Have an accounnt/</h2>
            <span>Sign In with your email & password</span>
            <form onSubmit={handleSubmit}>

                 <FormInput
               label = 'Email'
               type="email" required onChange={handleChange} name='email' value={email}
               />

                <FormInput
               label = 'password'
               type="password" required onChange={handleChange} name='password' value={password}
               />

               <div className="buttons-container">

                 <Button  type='submit'>Sign In</Button>
                 <Button type='button' buttonType='google'  onClick={signInWithGoogle} >Google Sign In</Button>
               </div>
   
                </form>   

        </div>

    )
}

export default SignInForm;