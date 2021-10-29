import { getAuth,signOut, signInWithPopup, GoogleAuthProvider , onAuthStateChanged} from "firebase/auth";
import firebaseInitialization from "../firebase.initialization";
// import { useLocation,useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";

firebaseInitialization();

const useFirebase=()=>{
  const [user,setUser]=useState({})
  // const location=useLocation();
  // const history=useHistory()
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
  // const redirect_uri=location.state?.from || '/home';

  const handleGoogleLogIn=()=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // console.log(result.user);
      setUser(result.user);

      // history.push(redirect_uri);
    })
  }


  const logOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({});
    }).catch((error) => {
      // An error happened.
    });
    

  }
  

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        
      } 
      
    });

},[]);

        return{
          user,
          logOut,
         handleGoogleLogIn,

      
        }
      
    }
    
    export default useFirebase;