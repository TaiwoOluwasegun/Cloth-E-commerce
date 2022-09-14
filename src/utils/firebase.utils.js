import { initializeApp } from "firebase/app";
// setting up authentication
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc,} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDyG22OpYxVkYs8ejI_EQRaBSfbnjapoQ",
    authDomain: "crown-db-2-a8b1c.firebaseapp.com",
    projectId: "crown-db-2-a8b1c",
    storageBucket: "crown-db-2-a8b1c.appspot.com",
    messagingSenderId: "739461323259",
    appId: "1:739461323259:web:2f2838dbf357f6976f935e"
  };
  

  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider );
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation={}) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef)
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists())

    //   if user data does not exist
      if (!userSnapshot.exists()) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
              await setDoc(userDocRef,{
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              });
          } catch (error){
              console.log('error creating the user', error.message)
          }
      }

      return userDocRef

  };

  export const createAuthUserWithEmailAndPassword = async(email, password) => {
      if (!email || !password)  return;

     return await createUserWithEmailAndPassword (auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password)  return;

   return await signInWithEmailAndPassword (auth, email, password)
}