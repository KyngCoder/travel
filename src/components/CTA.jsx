import React from "react";

const CTA = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src="https://images.unsplash.com/photo-1552160757-52790c6f4faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        className="h-full w-full bg-cover  -z-30 absolute"
      />
      <div className="flex justify-center">
        <p className="text-white font-bold text-4xl absolute top-1/3">
          Lets Explore The World Together 
        </p>
        <button className="absolute top-1/2 text-4xl px-6 py-4 bg-blue-500 rounded-lg text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
