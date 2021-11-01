import React, { useRef } from 'react';
// on the Add A New Service, the admin will be able to add a brand new service. After adding that service, this service will appear on the home page. The name Add a new service could be changed based on your website. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other image hosting website and then put the url on the input field)


const AddService = () => {
    const titleRef=useRef();
    const priceRef=useRef();
    const imgRef=useRef();
    const descriptionRef=useRef();


    const handleAddHomeUser=(e)=>{
     
        const title=titleRef.current.value;
        const price=priceRef.current.value;
        const imgUrl=imgRef.current.value;
        const description=descriptionRef.current.value;
        const newHomeUser={title,price,imgUrl,description};


        fetch('https://polar-beach-07938.herokuapp.com/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newHomeUser)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('successfully added the service.')
                e.target.reset(); 
            }
        })


        e.priventDefault();


    }

    return (
        <div>
            <h2 className="text-xl font-semibold my-5">Add New A New Service </h2>

            <form onSubmit={handleAddHomeUser} >
                < input type="text"    ref={titleRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Service Title" required/><br/> <br/>
                < input type="text"    ref={priceRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Service Price" required/><br/> <br/>
                < input type="text"    ref={imgRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Service image url" required/><br/> <br/>
                < textarea type="text" ref={descriptionRef}   className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Service Description" required/><br/> <br/>

                <input type="submit" value="Submit " className="bg-purple-500 mb-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" />
            </form>

            
        </div>
    );
};

export default AddService;