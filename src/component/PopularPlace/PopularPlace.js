import React from 'react';

const PopularPlace = (props) => {
    const {title,price,url}=props.place;
    return (
        <div className="border-solid border-2 ">
        <img  className="w-full md:w-96 h-80" src={url} alt=""/>
        <h2 className="font-semibold text-xl md:text-2xl  inline-block">{title}</h2>
        <h4 className="font-semibold text-lg md:text-xl my-2 ">From $: {price}</h4>
      
    </div>
    );
};

export default PopularPlace;