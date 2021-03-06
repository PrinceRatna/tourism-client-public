import React from 'react';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();

    return (
    <div>
          <div>
            <nav className="bg-customColor3 flex flex-wrap justify-between  ">
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/home">Home Page</NavLink>
                
                 
                 {
                     user.email&&<NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/myOrders">My Orders</NavLink>
                 }

                 {

                     user.email&&<NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/manageAllOrders">Manage All Orders</NavLink>
                 }

                 {
                     user.email&&<NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/addService">Add Service</NavLink>
                 }

                {
                    user.email?
                  <button onClick={logOut} className="text-white text-2xl block font-semibold p-4 " > Sign Out</button>:
                    <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/sign"> Sign In</NavLink>
                }
                {
                    user.displayName&&<div className="text-white  text-2xl block font-semibold p-4 ">{user.displayName}</div>
                }
               
            </nav>
        </div>
    </div>
    );
};

export default Header;