import github from "../images/github.svg";
import calender from "../images/calender.svg";
import cli from "../images/cli.svg";
import note from "../images/note.svg";
import pdf_file from "../images/pdf_file.svg";
import spotify from "../images/spotify.svg";
import link from "../images/link.svg";
import mail from "../images/mail.svg";
import { useState } from "react";

const Dock = ({ windowState, setwindowState }) => {
  const [hovered, sethovered] = useState(null);
  const icons = [
    { name: "GitHub", icon: github, color: "#181717", id: "Github" },
    { name: "Calender", icon: calender, color: "#FF3B30", id: "Calender" },
    { name: "CLI", icon: cli, color: "#1C1C1E", id: "Terminal" },
    { name: "Notes", icon: note, color: "#FFCC00", id: "Note" },
    { name: "PDF", icon: pdf_file, color: "#FF3B30", id: "Resume" },
    { name: "Spotify", icon: spotify, color: "#1DB954", id: "Spotify" },
    { name: "Link", icon: link, color: "#0A84FF", id: "Link" },
    { name: "Mail", icon: mail, color: "#007AFF", id: "Mail" },
  ];

  return (
    <div className="fixed bottom-6  left-1/2 -translate-x-1/2">
      <div
        className="flex items-center gap-3 px-4 py-3 
      bg-white/10 backdrop-blur-md 
      border border-white/20 
      rounded-2xl shadow-lg"
      >
        {icons.map((icon, idx) => {
          let scale = 1;
          let x = 0;

          if (hovered === idx) {
            scale = 1.4;
          } else if (hovered === idx - 1) {
            scale = 1.2;
            x = -10;
          } else if (hovered === idx + 1) {
            scale = 1.2;
            x = 10;
          }

          return (
            <img
              key={idx}
              src={icon.icon}
              alt={icon.name}
              onMouseEnter={() => sethovered(idx)}
              onMouseLeave={() => sethovered(null)}
              onClick={() => {
                if (icon.id === "Link") {
                  window.open(
                    "https://www.linkedin.com/in/tanveerahmed9413/",
                    "_blank",
                  );
                  return;
                }

                if (icon.id === "Mail") {
                    window.location.href = "mailto:tanveerahmed4872@gmail.com";
                  return;
                }

                setwindowState((prev) => ({
                  ...prev,
                  [icon.id]: !prev[icon.id],
                }));
              }}
              style={{
                transform: `translateX(${x}px) scale(${scale})`,
                background: `${icon.color}`,
              }}
              className="w-12 h-12 p-2 rounded-xl transition-all duration-300 ease-out cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
