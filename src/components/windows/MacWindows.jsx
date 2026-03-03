import React from "react";
import { Rnd } from "react-rnd";

const MacWindows = ({ children }) => {
  return (
    <div>
      <Rnd
        default={{
          height: "60vh",
          width: "40vw",
          x: 400,
          y: 60,
        }}
      >
        <div className="windows rounded-xl h-full border bg-black overflow-hidden">
          <div className="nav flex items-center gap-2 px-2 py-1 border-b-yellow-50 border-2">
            <div className="dots flex gap-1 ">
              <div className="red bg-red-500 rounded-full h-3 w-3 "></div>
              <div className="yellow bg-yellow-300 rounded-full h-3 w-3 "></div>
              <div className="green bg-green-500 rounded-full h-3 w-3 "></div>
            </div>
            <div className="title text-white ">
              <p>tanveerahmed -- </p>
            </div>
          </div>
          <div className="main-content justify-center items-center  text-black px-4 py-3 overflow-scroll h-full">
            <div className="flex flex-wrap gap-5">{children}</div>
          </div>
        </div>
      </Rnd>
    </div>
  );
};

export default MacWindows;
