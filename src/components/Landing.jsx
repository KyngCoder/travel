import React, { useState } from "react";
import vid1 from "../assets/travel-1.mp4";
import vid2 from "../assets/img/vid-2.mp4";
import vid3 from "../assets/travel-2.mp4";
import vid4 from "../assets/travel-3.mp4";
import vid5 from "../assets/travel-4.mp4";

const Landing = () => {
  const [num, setNum] = useState(1);
  console.log(typeof `vid${num}`);

  const renderVideo = () => {
    if (num === 1) {
      return (
        <video
          src={vid1}
          autoPlay
          muted
          loop
          className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    } else if (num === 2) {
      return (
        <video
          src={vid2}
          autoPlay
          muted
          loop
          className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }
    if (num === 3) {
      return (
        <video
          src={vid3}
          autoPlay
          muted
          loop
          className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }
    if (num === 4) {
      return (
        <video
          src={vid4}
          autoPlay
          muted
          loop
          className="w-full h-full brightness-90 overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    } else {
      return (
        <video
          src={vid5}
          autoPlay
          muted
          loop
          className="w-full brightness-50 h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }
  };

  return (
    <section className="height w-screen ">
      <div className=" h-screen">
        {renderVideo()}
        <div className="flex  justify-center ">
          <input
            name="vid"
            onClick={() => setNum(1)}
            type="radio"
            className="z-5 input-custom   absolute bottom-24 mr-64"
          />
          <input
            name="vid"
            onClick={() => setNum(2)}
            type="radio"
            className="z-5 input-custom    absolute bottom-24 mr-48"
          />
          <input
            name="vid"
            onClick={() => setNum(3)}
            type="radio"
            className="z-5  input-custom  absolute bottom-24 mr-32"
          />
          <input
            name="vid"
            onClick={() => setNum(4)}
            type="radio"
            className="z-5  input-custom  absolute bottom-24 mr-16"
          />
          <input
            name="vid"
            onClick={() => setNum(5)}
            type="radio"
            className="z-5  input-custom  absolute bottom-24 mr-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center h-4/5 px-8">
        <h2 className=" text-6xl pb-4 text-center text-white font-bold">We make dreams come true!!</h2>
        <p className=" text-xl text-center text-white font-bold pb-4">Let us transport you with our highly affordable and reliable holiday packages</p>
        <button className="bg-blue-500  rounded-md text-white text-2xl font-semibold mt-4 py-4 px-6">Discover More </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
