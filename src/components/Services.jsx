import React from "react";

import { services } from "../data.tsx";

const Services = () => {
  return (
    <div className="wrapper" id="services">
      <h2 className="wrapper-h2">Our Services</h2>
      <div className="line"></div>
      <div className="cards">
        {services.map((item, key) => {
          return (
            <div key={key} className="single-service">
              <div className="flex justify-center pb-4">
                <div className="flex justify-center bg-black w-fit p-4 rounded-full text-white text-2xl">
                  {item.icon}
                </div>
              </div>
              <span></span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a href="#">Learn More</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
