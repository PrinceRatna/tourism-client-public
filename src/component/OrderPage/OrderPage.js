import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderPage = () => {
    const {id}=useParams();
    const[order,setOrder]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[]) 
    return (
        <div>
            {
                order.description
            }
        </div>
    );
};

export default OrderPage;