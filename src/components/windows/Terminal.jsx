import React from "react";
import MacWindows from "./MacWindows";
import { ReactTerminal } from "react-terminal";

const Terminal = ({ setwindowState, activeWindow, setActiveWindow }) => {
  const commands = {
    whoami: "tanveer",

    about: () =>
      "Hi, I'm Tanveer Ahmed 👋\nBCA Student | Full Stack Developer\nI love building real-world web apps.",

    skills: () =>
      "Skills:\n- HTML, CSS, JavaScript\n- React.js\n- Node.js, Express\n- MongoDB\n- Tailwind CSS",

    projects: () =>
      "Projects:\n1. E-commerce Website\n2. Notes App (LocalStorage)\n3. Bubble Game (Firebase + Leaderboard)\n4. Portfolio Website",

    experience: () =>
      "Experience:\n- Built multiple frontend projects\n- Worked with APIs (fetch)\n- Backend with Node.js & MongoDB\n- Currently improving full stack skills",

    contact: () =>
      "Contact Me:\nEmail: tanveerahmed4872@gmail.com\nGitHub: github.com/tanveerahmed9413\nLinkedIn: linkedin.com/in/tanveerahmed9413",

    echo: (...args) => args.join(" "),
    cd: (dir) => `changed to ${dir}`,

    help: () =>
      "Commands:\nabout,\nskills,\nprojects,\nexperience,\ncontact,\nwhoami,\necho,",
  };

  return (
    <MacWindows
      height={400}
      width={600}
      id="Terminal"
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      onClose={() =>
        setwindowState((prev) => ({
          ...prev,
          Terminal: false,
        }))
      }
    >
      <div className="w-[550px] h-[300px]">
        <ReactTerminal
          commands={commands}
          theme="dark"
          welcomeMessage={`Welcome to My Portfolio CLI 🚀

Hey there! Welcome to my interactive terminal portfolio.

You can explore:
- about       → Learn about me 
- skills      → View my technical skills 
- projects    → Check out my work 
- experience  → See my journey 
- contact     → Get in touch 

Type "help" to see all available commands.

Happy exploring! 💻`}
          prompt={"tanveerahmed:~$ "}
          showControlBar={false}
          showControlButtons={false}
        />
      </div>
    </MacWindows>
  );
};

export default Terminal;
