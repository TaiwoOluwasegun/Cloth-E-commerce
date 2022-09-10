// import { useEffect } from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils'
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

    // useEffect (async()=>{
    //     // since getredirect is ann asynchronous method
    //       const response = await getRedirectResult(auth)  
    //       console.log(response)
    //       if(response){
    //           console.log(response)
    //      const userDocRef = await createUserDocumentFromAuth(response.user);
    //       }

    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

 return(
     <div>
         <h1>sign in</h1>
         <button onClick={logGoogleUser}>Google Sign-Up</button>
         <SignUpForm/>
     </div>
 )
}

export default SignIn