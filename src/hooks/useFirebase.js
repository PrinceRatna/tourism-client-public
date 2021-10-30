import { getAuth,signOut, signInWithPopup, GoogleAuthProvider , onAuthStateChanged} from "firebase/auth";
import firebaseInitialization from "../firebase.initialization";
import { useEffect, useState } from "react";

firebaseInitialization();

const useFirebase=()=>{
  const [user,setUser]=useState({})
  const[order,setOrder]=useState({});

  const myFunction=()=>{

   return  order.title=order?.title+''

  }
  
  

  const [isLoading,setIsLoading]=useState(true);
 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

  const handleGoogleLogIn=()=>{
    setIsLoading(true);
   return signInWithPopup(auth, googleProvider)
    
  }


  const logOut=()=>{
     setIsLoading(true);
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      setUser({});
    })
    .finally(()=>setIsLoading(false));
    

  }
  
//observe user state change
  useEffect(()=>{

   const unsubscribed= onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUser(user);
        
      } 
      else{
        setUser({})
      }
      setIsLoading(false);
      
    });
    return ()=>unsubscribed;

},[]);

        return{
          user,
          setIsLoading,
          isLoading,
          order,
          setOrder,
          logOut,
          myFunction,
         handleGoogleLogIn,

      
        }
      
    }
    
    export default useFirebase;