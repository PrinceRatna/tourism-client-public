import React from 'react';
import { Route,Redirect, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    if(isLoading){
      return <div className="text-red-600 text-xl font-semibold"> Loading.....</div> 
    }
    return (
        <Route 
        {...rest}
      render={({ location }) =>
        user.email ?
          children: 
          <Redirect
            to={{
              pathname: "/sign",
              state: { from: location }
            }}
          />
        
      }
        >


        </Route>
    );
  

};

export default PrivateRoute;