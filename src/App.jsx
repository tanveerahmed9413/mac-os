import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Spotify from "./components/windows/Spotify";
import Terminal from "./components/windows/Terminal";
import Calender from "./components/windows/Calender"
import Resume from "./components/windows/Resume";
import { useState } from "react";

const App = () => {
  
  const [activeWindow, setActiveWindow] = useState(null)
  const [windowState, setwindowState] = useState({
    Github: false,
    Note: false,
    Resume: false,
    Spotify: false,
    Terminal: false,
    Calender: false,
  
  })
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('https://plus.unsplash.com/premium_photo-1701187734469-b82153116e43?q=80&w=871&auto=format&fit=crop')]">

      <Nav />
      <Dock windowState={windowState} setwindowState={setwindowState}  activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>
      {windowState.Github && <Github setwindowState={setwindowState}  activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
      {windowState.Note && <Note setwindowState={setwindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
      {windowState.Resume && <Resume setwindowState={setwindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
      {windowState.Spotify && <Spotify setwindowState={setwindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
      {windowState.Calender && <Calender setwindowState={setwindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
      {windowState.Terminal && <Terminal setwindowState={setwindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>}
    </div>
  );
};

export default App;