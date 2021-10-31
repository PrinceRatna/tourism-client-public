import React, { useEffect, useRef, useState  } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

// The Place Order page should display detailed information of the item, user has clicked. It will display users name and email address from the login system and user will provide address and necessary information to place the order/booking/purchase.





const OrderPage = () => {
    const nameRef=useRef();
    const phoneRef=useRef();
    const addressRef=useRef();

    // const {user}=useAuth();
    const {user,isLoading,setOrder,order}=useAuth();
    const {id}=useParams();
    // const[order,setOrder]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[]) 


    

    


    if(isLoading){
        return <div className="text-red-600 text-xl font-semibold"> Loading.....</div> 
      }
       
      const handleAddUser=(e)=>{
           
        const description=order.description;
        const title=order.title;
        const name=nameRef.current.value;
        const phone=phoneRef.current.value;
        const address=addressRef.current.value;
        const newUser={name,phone,address,description,title};
         
      fetch('http://localhost:5000/addOrders',{
       method:'POST',
       headers:{
           'content-type':'application/json'
       },
       body: JSON.stringify(newUser)
     })
     .then(res=>res.json())
     .then(data=>{
         if(data.insertedId){
             alert('Successfully booking completed.') 
             e.target.reset();
         }
     });




        e.preventDefault();


      }


    //   console.log(order);
    //   console.log(user)
    return (
        <div>

            <div className="border-2  border-green-500 mx-auto w-11/12 my-5  p-2">
                <h2 className="text-red-600 text-xl font-semibold">Log In User Name : {user.displayName}</h2>
                <h2 className="font-medium"><span className=" text-xl font-semibold">Email :</span> {user.email}</h2>
                 <p className="font-medium"> <span className=" text-xl font-semibold">Description :</span> {order.description}</p> 
            </div>
            
              

                <form onSubmit={handleAddUser} >
                < input type="text"    ref={nameRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter Name" required/><br/> <br/>
                < input type="text"    ref={phoneRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter Your Phone Number" required/><br/> <br/>
                < textarea type="text" ref={addressRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter Your Address" required/><br/> <br/>

                <input type="submit" value="Submit " className="bg-purple-500 mb-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" />
            </form>

            
        </div>
    );
};

export default OrderPage;