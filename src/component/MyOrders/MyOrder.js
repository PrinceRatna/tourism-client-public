import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';




// On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.


const MyOrder = () => {

    const {isLoading,myFunction}=useAuth();
    //   const arr=[...title]
    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/addOrders')
    //     .then(res=>res.json())
    //     .then(data=>setMyOrders(data))

    // },[])

    if(isLoading){
        return <div className="text-red-600 text-xl font-semibold"> Loading.....</div> 
      }
        
    
    return (
        <div>

            {
              myFunction()
            
            /* {
                myOrders.map(myOrder=><li>{myOrder.title}</li>)
            } */}

            
        </div>
    );
};

export default MyOrder;