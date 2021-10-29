import React from 'react';
import useAuth from '../../hooks/useAuth';
// import { getAuth} from "firebase/auth";

// const auth = getAuth();


const SignIn = () => {
    const {handleGoogleLogIn,logOut,user}=useAuth();
  
    return (
        <div className="text-center my-60 mx-auto ">

  {
      user.email?
      <button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" onClick={logOut}>Google Sign Out</button>
      :<button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" onClick={handleGoogleLogIn}>Google Sign In</button>

  }

 

  
  


        </div>
    );
};

export default SignIn;