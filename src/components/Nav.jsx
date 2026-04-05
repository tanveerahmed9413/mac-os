import React, { useEffect, useState } from "react";
import apple from "../assets/apple.svg";
import wifi from "../assets/wifi.svg";

const Nav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    flex justify-between items-center px-4 py-1 
    bg-white/10 backdrop-blur-md border-b border-white/20 text-white text-sm">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src={apple} alt="apple" className="h-5 w-5" />

        <p className="font-semibold cursor-pointer hover:text-gray-300">
          Tanveer Ahmed
        </p>

        <p className="cursor-pointer hover:text-gray-300">File</p>
        <p className="cursor-pointer hover:text-gray-300">Window</p>
        <p className="cursor-pointer hover:text-gray-300">Terminal</p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <img src={wifi} alt="wifi" className="h-4 w-4" />

        <div className="flex items-center gap-2">
          <span>
            {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}
          </span>
          <span>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: '2-digit'
            })}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;