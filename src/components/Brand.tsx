import React from "react";
import brand1 from "../assets/img/brands/behance.png";
import brand2 from '../assets/img/brands/dribbble.png'


const Brand = () => {
  return (
    <section className="bg-black py-20 w-screen h-20 flex items-center px-8 text-white  ">
      <div className="flex w-screen flex-wrap items-center justify-center">
        <a
          href="javascript:void(0)"
          className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
        >
          <img src={brand1} alt="image" className="h-10 w-full" />
        </a>
        <a
          href="javascript:void(0)"
          className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
        >
          <img
            src={brand2}
            alt="image"
            className="h-10 w-full"
          />
        </a>
        
       
        <a
          href="javascript:void(0)"
          className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
        >
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
            alt="image"
            className="h-10 w-full"
          />
        </a>
        <a
          href="javascript:void(0)"
          className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
        >
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
            alt="image"
            className="h-10 w-full"
          />
        </a>
      </div>
    </section>
  );
};

export default Brand;
