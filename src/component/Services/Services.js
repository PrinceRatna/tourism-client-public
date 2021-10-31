import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Services = (props) => {
    // const {order}=useAuth();

    const{title,url,price,description,_id}=props.service;
    // const[order,setOrder]=useState({})



    // const handleAddOrder=()=>{
    
    //         fetch('http://localhost:5000/addOrders',{
    //             method:'POST',
    //             headers:{
    //                 'content-type':'application/json'
    //             },
    //             body: JSON.stringify(order)
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if(data.insertedId){
    //                 alert('Successfully booking completed.')
    //             }
    //         });
       
    // }



    // border-4
    return (
        <div className="border-solid border-2 ">
            <img  className="w-full md:w-96 h-80" src={url} alt=""/>
            <h2 className="font-semibold text-xl md:text-2xl  inline-block">Service Name:{title}</h2>
            <h4 className="font-semibold text-lg md:text-xl my-2 ">From $ : {price}</h4>
            <p><span className="text-lg font-medium">Description : </span> <span> {description}</span></p>
            <NavLink to={`/order/${_id}`}><button  className="mt-3 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded">Booking</button></NavLink>

            

            
        </div>
    );
};

export default Services;