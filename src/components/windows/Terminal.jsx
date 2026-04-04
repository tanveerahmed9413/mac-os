import React from "react";
import MacWindows from "./MacWindows";
import { ReactTerminal } from "react-terminal";

const Terminal = () => {
  const commands = {
    whoami: "tanveer",
    echo: (...args) => args.join(" "),
    cd: (dir) => `changed to ${dir}`,
    myhelp: () => "Commands: echo, whoami, cd",
  };

  return (
    <MacWindows height={400} width={600}>
      <div className="w-[550px] h-[300px]">
        <ReactTerminal
          commands={commands}
          theme="dark"
          welcomeMessage={"Welcome to the terminal 🚀 "}
          showControlBar={false}
          showControlButtons={false}
        />
      </div>
    </MacWindows>
  );
};

export default Terminal;