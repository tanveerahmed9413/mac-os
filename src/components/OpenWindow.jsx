import { useState } from "react";
import Dock from "./Dock";
import Resume from "../components/windows/Resume";
import Spotify from "../components/windows/Spotify";
import Github from "../components/windows/Github";
import Note from "../components/windows/Note";
import Calendar from "./windows/Calender";

const OpenWindow = () => {
  const [windows, setWindows] = useState({
    note: false,
    pdf: false,
    spotify: false,
    github: false,
    calender: false,
  });

  const openWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const closeWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  return (
    <div>
      {/* Dock */}
      <Dock openWindow={openWindow} />

      {/* Windows */}
      {windows.note && <Note onClose={() => closeWindow("note")} />}
      {windows.pdf && <Resume onClose={() => closeWindow("pdf")} />}
      {windows.spotify && <Spotify onClose={() => closeWindow("spotify")} />}
      {windows.github && <Github onClose={() => closeWindow("github")} />}
      {windows.calender && <Calendar onClose={() => closeWindow("calender")} />}
    </div>
  );
};

export default OpenWindow;
