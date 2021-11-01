import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';


const UpdateOrder = () => {
    const {id}=useParams();
    const [allOrder,setAllOrder]=useState({});
useEffect(()=>{
    const url=`https://polar-beach-07938.herokuapp.com/addOrders/${id}`;
fetch(url)
.then(res=>res.json())
.then(data=>setAllOrder(data))
},[])
// name change
const handleNameChange=e=>{
    const updatedName=e.target.value;
    const UpdateOrder={
        name:updatedName,
        phone:allOrder.phone,
        address:allOrder.address,
        title:allOrder.title
    }
    setAllOrder(UpdateOrder)

}

//phone change

const handlePhoneChange=e=>{
    const updatedPhone=e.target.value;
    const UpdateOrder={
        name:allOrder.name,
        phone:updatedPhone,
        address:allOrder.address,
        title:allOrder.title
    }
    setAllOrder(UpdateOrder)

}
//address change
const handleAddressChange=e=>{
    const updatedAddres=e.target.value;
    const UpdateOrder={
        name:allOrder.name,
        phone:allOrder.phone,
        address:updatedAddres,
        title:allOrder.title
    }
    setAllOrder(UpdateOrder)

}

//updated title

const handleTitleChange=e=>{
    const updatedTitle=e.target.value;
    const UpdateOrder={
        name:allOrder.name,
        phone:allOrder.phone,
        address:allOrder.address,
        title:updatedTitle
    }
    setAllOrder(UpdateOrder)

}


const handleUpdateOrder=e=>{

    const url=`https://polar-beach-07938.herokuapp.com/addOrders/${id}`;
    fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(allOrder)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            alert('Updated Successfully')
            setAllOrder({});
        }
    })
    e.preventDefault();

}

    return (
        <div >
            <form onSubmit={handleUpdateOrder}>
                <input type="text"onChange={handleTitleChange} value={allOrder.title||''} className="  my-5  border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/>
                <input type="text"onChange={handleNameChange} value={allOrder.name||''} className="    my-5  border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/>
                <input type="text"onChange={handlePhoneChange} value={allOrder.phone||''} className="  my-5  border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/>
                <input type="text"onChange={handleAddressChange} value={allOrder.address||''} className="my-5  border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/>
                <input type="submit" value="Submit" className=" bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-2 h-8 pl-2 pr-2 text-white font-medium text-base rounded"/>
            </form>
            
        </div>
    );
};

export default UpdateOrder;

