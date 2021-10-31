import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    // const {order}=useAuth({});
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[]);


    const handleDeleteOder=id=>{
        const proceed=window.confirm('Are you sure, you want to delete?');
        if(proceed){
           const url=`http://localhost:5000/addOrders/${id}`;
           fetch(url,{
               method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               if(data.deletedCount>0){
                   alert('Deleted Successfull');
                   const remainingOrders=orders.filter(allOrder=>allOrder._id!==id)
                   setOrders(remainingOrders);
               }
           })
       
        }
       
        }


    return (
        <div>
            <ul>
           {
               orders.map(order=><li><span className=" font-medium text-lg mr-2">{order.title}</span><button onClick={()=>handleDeleteOder(order._id)} className=" my-2 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-2 h-8 pl-2 pr-2 text-white font-medium text-base rounded">Delete</button></li>)
           }

          </ul>

            {/* {order.title} */}
        </div>
    );
};

export default MyOrder;