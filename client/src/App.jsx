import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import { PlayerProvider } from "./components/PlayerContext.jsx";
import AtmosphereControl from "./components/AtmosphereControl.jsx";

const Explore = () => <h1 className="text-5xl font-bold text-green-500">Explore Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <MusicPlayer />
        <AtmosphereControl />
      </PlayerProvider>
    </BrowserRouter>
  );
}

export default App;