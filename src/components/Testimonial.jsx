import React, { useState } from "react";

import { text } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdStar } from "react-icons/md";

const Testimonial = () => {

    const stars = (num) => {
        if (num === 1) {
          return (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          );
        }
        else if(num === 2){
            return(
                <div className="flex">
                        <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                
                </div>
            )
            }
        else if(num === 3){
            return(
                <div className="flex">
                        <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
             
                </div>
            )
            }
        else if(num === 4){
        return(
            <div className="flex">
                    <MdStar className="text-yellow-400" />
            <MdStar className="text-yellow-400" />
            <MdStar className="text-yellow-400" />
            <MdStar className="text-yellow-400" />
            </div>
        )
        }  else{
            return(
                <div className="flex">
                        <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                <MdStar className="text-yellow-400" />
                </div>
            )
            }
    }

  return (
    <section className="bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
          What our <span className="text-blue-500 ">clients</span> says
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <Swiper
          spaceBetween={50}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          navigation={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 ">
            {text?.map((info, id) => {
              return (
                <SwiperSlide key={`${info}${id}`}>
                  <div className="p-8 border rounded-lg dark:border-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                      {info.text}
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        src={info.profile}
                        alt=""
                      />

                      <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 ">
                          {info.name}
                        
                        </h1>
                      </div>
                      <div className="flex  w-full justify-end h-full ">
                      {stars(info.rating)}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </section>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
