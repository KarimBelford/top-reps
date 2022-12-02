import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAaZEp-L5UGR3QeiJqjn0WUg_UsR-Nzr-Y",
    authDomain: "top-reps-db.firebaseapp.com",
    projectId: "top-reps-db",
    storageBucket: "top-reps-db.appspot.com",
    messagingSenderId: "766177518330",
    appId: "1:766177518330:web:524ca4ba1f804274bf1f43"
};
  
 
const firebaseApp = initializeApp(firebaseConfig);

const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,authProvider)

export const db = getFirestore();

// funtion to create users and store them in firestore cloud
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
}
