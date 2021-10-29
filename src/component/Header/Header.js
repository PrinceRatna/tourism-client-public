import React from 'react';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user}=useAuth();

    return (
    <div>
          <div>
            <nav className="bg-customColor3 flex flex-wrap justify-between  ">
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/home">Home Page</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/about">About Us</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/services">Services</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/event">Event</NavLink>
                {/* <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/register">Register</NavLink> */}
                {
                    user.email?
                    <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/sign"> Sign Out</NavLink>:
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