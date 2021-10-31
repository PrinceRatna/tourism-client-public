// import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import baner1 from '../../images/p-2.jpg';
import baner2 from '../../images/p-1.jpg';
import baner3 from '../../images/p-3.jpg';
import PopularPlace from '../PopularPlace/PopularPlace';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
  const{isLoading}=useAuth();
  const[services,setServices]=useState([]);
  const[places,setPlaces]=useState([]);

 

  //services useEffect
  useEffect(()=>{
    fetch('https://chilling-castle-57731.herokuapp.com/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[]);

  //popular place useEffect

  useEffect(()=>{
    fetch('https://chilling-castle-57731.herokuapp.com/places')
    .then(res=>res.json())
    .then(data=>setPlaces(data))
  },[]);
 
    //loading home page


  if(isLoading){
    return <div className="my-5 text-red-600 text-xl font-semibold"> Loading.....</div> 
  }

    return (
        <div>
          <h2 className="text-center text-5xl font-bold mt-10 mb-5"> WELCOME TO TURISTA</h2>
              <div className="carousel relative rounded relative overflow-hidden shadow-xl">
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* <!--Slide 1--> */}
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
            checked="checked"/>
          <div className="carousel-item absolute opacity-0 bg-center" style={{height:"500px", backgroundImage:`url(${baner1})`}}>
          
          </div>
          <label htmlFor="carousel-3"
            className="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>
      
          {/* <!--Slide 2--> */}
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        
          <div className="carousel-item absolute opacity-0 bg-center" style={{height:"500px", backgroundImage: `url(${baner2})`}}>
          </div>
          <label htmlFor="carousel-1"
            className=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>
      
          {/* <!--Slide 3--> */}
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
          <div className="carousel-item absolute opacity-0" style={{height:"500px",backgroundImage:`url(${baner3})`}}>
          </div>
          <label htmlFor="carousel-2"
            className="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>
      
          {/* <!-- Add additional indicators for each slide--> */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>
      
        </div>
      </div>
      
            <h2 className="text-center text-3xl font-bold mt-10 mb-5"> The  Services Of Our Tour</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ">
        {
             services.map(service=><Services key={service._id} service={service}></Services>)
        }


      </section>


      {/* two extra sections  */}
      <section >
      <h2 className="text-center text-3xl font-bold mt-10 mb-5"> Travel Most Popular Place In The World</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ">
      {
        places.map(place=><PopularPlace key={place._id} place={place}></PopularPlace>)

      }
      </div>


      </section>
      <section>
      <h2 className="text-center text-xl font-bold mt-10 mb-5"> The Best Of Our All Tour Packages</h2>
      <ul>
        <li className="mb-3 font-medium"><span className="text-lg font-semibold">Australia :</span> $236 (5 Days-4 Nignt)  </li>
        <li className="mb-3 font-medium"><span className="text-lg font-semibold">Canada :</span> $260 (5 Days-4 Nignt)</li>
        <li className="mb-3 font-medium"><span className="text-lg font-semibold">USA : </span> $400 (5 Days-4 Nignt)</li>
        <li className="mb-3 font-medium"><span className="text-lg font-semibold">France :</span> $350 (5 Days-4 Nignt)</li>
        <li className="mb-3 font-medium"><span className="text-lg font-semibold">Nepal :</span> $26 (5 Days-4 Nignt)</li>
        <li className="mb-5 font-medium"><span className="text-lg font-semibold">Germany : </span>$306 (5 Days-4 Nignt)</li>
      </ul>


      </section>

        </div>
    );
};

export default Home;