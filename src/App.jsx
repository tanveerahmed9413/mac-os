import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";

const App = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('https://plus.unsplash.com/premium_photo-1701187734469-b82153116e43?q=80&w=871&auto=format&fit=crop')]">

      <Nav />
      <Github />
      <Dock />

    </div>
  );
};

export default App;