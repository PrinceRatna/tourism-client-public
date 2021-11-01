import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('https://polar-beach-07938.herokuapp.com/addOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
    },[]);
 //delete an Order
 const handleDeleteOder=id=>{
 const proceed=window.confirm('Are you sure, you want to delete?');
 if(proceed){
    const url=`https://polar-beach-07938.herokuapp.com/addOrders/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert('Deleted Successfull');
            const remainingOrders=allOrders.filter(allOrder=>allOrder._id!==id)
            setAllOrders(remainingOrders);
        }
    })

 }

 }
    
    return (
        <div>
            <ul>
                {
                    allOrders.map(allOrder=><li key={allOrder._id}>
                        <div className="border">
                            <h2 className="text-xl font-bold">{allOrder.title}</h2>
                            <h2 className="font-medium"><span className="text-lg font-semibold">Name:    </span>{allOrder.name}</h2>
                            <h2 className="font-medium"><span className="text-lg font-semibold">Phone:   </span> {allOrder.phone}</h2>
                            <h2 className="font-medium"><span className="text-lg font-semibold">Address: </span>{allOrder.address}</h2>
                                <Link to={`/addOrders/update/${allOrder._id}`}><button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 my-2 h-8 pl-2 pr-2 mx-2 text-white font-medium text-base rounded">Update</button></Link>

                            <button onClick={()=>handleDeleteOder(allOrder._id)} className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-2 h-8 pl-2 pr-2 text-white font-medium text-base rounded">Delete</button>
                            {/* <h2>Description: {allOrder.description}</h2> */}
                        </div>
                         </li>)
                }
            </ul>
        </div>
    );
};

export default ManageAllOrder;