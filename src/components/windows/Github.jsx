import React from "react";
import MacWindows from "./MacWindows";
import githubData from "../../assets/github.json";
import Card from "../Card";

const Github = ({ setwindowState ,activeWindow, setActiveWindow}) => {
  return (
    <MacWindows
      height={400}
      width={650}
      id="Github"
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      onClose={() =>
        setwindowState((prev) => ({
          ...prev,
          Github: false,
        }))
      }
    >
      <div className="w-full h-full overflow-y-auto p-4">
        <h1 className="text-black text-xl font-semibold mb-4">
          GitHub Projects 🚀
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {githubData.map((user, idx) => {
            return <Card user={user} key={user.id} />;
          })}
        </div>
      </div>
    </MacWindows>
  );
};

export default Github;
