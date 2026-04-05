import React from "react";
import MacWindows from "./MacWindows";

const Resume = ({ setwindowState }, activeWindow, setActiveWindow) => {
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
