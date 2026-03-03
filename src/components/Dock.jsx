import github from "../images/github.svg";
import calender from "../images/calender.svg";
import cli from "../images/cli.svg";
import link from "../images/link.svg";
import mail from "../images/mail.svg";
import note from "../images/note.svg";
import pdf_file from "../images/pdf_file.svg";
import spotify from "../images/spotify.svg";
import { useState } from "react";

const Dock = () => {
  const [hovered, sethovered] = useState(null);
  const icons = [
    {
      name: "GitHub",
      icon: github,
      color: "#181717",
    },
    {
      name: "Calendar",
      icon: calender,
      color: "#FF3B30",
    },
    {
      name: "CLI",
      icon: cli,
      color: "#1C1C1E",
    },
    {
      name: "Links",
      icon: link,
      color: "#0A84FF",
    },
    {
      name: "Mail",
      icon: mail,
      color: "#007AFF",
    },
    {
      name: "Notes",
      icon: note,
      color: "#FFCC00",
    },
    {
      name: "PDF",
      icon: pdf_file,
      color: "#FF3B30",
    },
    {
      name: "Spotify",
      icon: spotify,
      color: "#1DB954",
    },
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
  } 
  else if (hovered === idx - 1) {
    scale = 1.2;
    x = -10;
  } 
  else if (hovered === idx + 1) {
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
      style={{
        transform: `translateX(${x}px) scale(${scale})`,
        background: `${icon.color}`
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
