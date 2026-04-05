import React from "react";
import MacWindows from "./MacWindows";

const Resume = ({ setwindowState , activeWindow, setActiveWindow}) => {
  return (
    <MacWindows
      height={400}
      width={650}
      id="Resume"
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      onClose={() =>
        setwindowState((prev) => ({
          ...prev,
          Resume: false,
        }))
      }
    >
      <div className="h-screen ">
        
        <iframe
          className="h-full w-full"
          src="/TanveerAhmed.pdf"
        >
          
        </iframe>
      </div>
    </MacWindows>
  );
};
export default Resume;
