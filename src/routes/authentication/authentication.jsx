// import { useEffect } from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-In-form/sign-In-form.component';
import './authentication.styles.scss'

const Authentication = () => {

    // useEffect (async()=>{
    //     // since getredirect is ann asynchronous method
    //       const response = await getRedirectResult(auth)  
    //       console.log(response)
    //       if(response){
    //           console.log(response)
    //      const userDocRef = await createUserDocumentFromAuth(response.user);
    //       }

    // }, [])



 return(
     <div className='auth-container'>
         <SignInForm/>
         <SignUpForm/>
     </div>
 )
}

export default Authentication