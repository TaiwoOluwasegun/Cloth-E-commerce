import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button.component";
import './sign-up-form-styles.scss'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        if (password !== confirmPassword)
        // alert('password do not match');
        return;
        try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields()
        console.log(user)
       
        }
        catch(err){
                console.log(err)
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
            <h2>Dont have ann accounnt/</h2>
            <form onSubmit={handleSubmit}>
               
               <FormInput
               label = 'Display Name'
               type="text" required onChange={handleChange} name='displayName' value={displayName}
               />

                 <FormInput
               label = 'Email'
               type="email" required onChange={handleChange} name='email' value={email}
               />

                <FormInput
               label = 'password'
               type="password" required onChange={handleChange} name='password' value={password}
               />

                <FormInput
               label = 'Confirm Password'
               type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}
               />

                    <Button buttonType='' type='submit'>Sign Up</Button>

                
                
                </form>   

        </div>

    )
}

export default SignUpForm;