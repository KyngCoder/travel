import React from "react";

import { gallery } from "../data/";

const Gallery = () => {
  return (
    <section className="overflow-hidden bg-blue-300 text-gray-700 ">
      <div className="container px-5 pb-4 mx-auto lg:pt-4 lg:px-32">
        <h2 className="wrapper-h2 text-[30px] md:text-[60px]">Gallery</h2>
        <div className="line"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {gallery.map((img, id) => {
            return (
              <div key={img+id} className="">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={img.source}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                       {img.subTitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {img.title}
                    </h1>
                    <p className="leading-relaxed">
                     {img.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
