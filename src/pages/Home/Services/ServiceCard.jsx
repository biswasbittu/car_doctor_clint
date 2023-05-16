import React from "react";

import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, price, title } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="flex items-center ">
        <div className="card-body  ">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-[#FF3811]  font-bold">Price: ${price}</p>
        </div>
        <div className="card-actions mt-12 mr-3 ">
          <button className="text-[#FF3811] font-normal text-2xl"> <FaArrowRight/> </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
