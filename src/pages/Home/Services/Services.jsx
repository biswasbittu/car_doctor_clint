import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`services.json`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data)
        })
    },[])
    

  return (
    <div className="mt-4">
      <div className="text-center space-y-4">
        <h5 className="font-bold text-[#FF3811]">Service</h5>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServiceCard
          key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
