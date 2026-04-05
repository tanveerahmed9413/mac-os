import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Calendar from "./components/windows/Calender";
import Terminal from "./components/windows/Terminal";
import { useState } from "react";

const App = () => {

  const [windowState, setwindowState] = useState({
    Github: false,
    Note: false,
    Resume: false,
    Spotify: false,
    Terminal: false,
    Calender: false


  })
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('https://plus.unsplash.com/premium_photo-1701187734469-b82153116e43?q=80&w=871&auto=format&fit=crop')]">

      <Nav />
      <Dock windowState={windowState} setwindowState={setwindowState} />

      {windowState.Github && <Github setwindowState={setwindowState}/>}
      {windowState.Note && <Note setwindowState={setwindowState}/>}
      {windowState.Resume && <Resume setwindowState={setwindowState}/>}
      {windowState.Spotify && <Spotify setwindowState={setwindowState}/>}
      {windowState.Calender && <Calendar setwindowState={setwindowState}/>}
      {windowState.Terminal && <Terminal setwindowState={setwindowState}/>}
    </div>
  );
};

export default App;