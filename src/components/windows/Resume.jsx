import React from "react";
import MacWindows from "./MacWindows";



const Resume = ({setwindowState}) => {
  return (
    <MacWindows height={500} width={650} onClose={() =>
        setwindowState((prev) => ({
          ...prev,
          Resume: false,
        }))
      }> 
      <div className="h-screen w-''screen''">
        {" "}
        <iframe
          className="h-full w-full"
          src="/TanveerAhmed.pdf"
          frameborder="0"
        >
          {" "}
        </iframe>{" "}
      </div>{" "}
    </MacWindows>
  );
};
export default Resume;
