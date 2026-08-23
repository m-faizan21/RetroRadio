import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import MusicPlayer from "./components/MusicPlayer.jsx";
import {PlayerProvider} from "./components/PlayerContext.jsx";


const Explore = () => <h1 className="text-5xl font-bold text-green-500">Explore Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <div className="flex h-screen items-center justify-center bg-zinc-900">
          <Navbar />
          <Routes className="text-5xl font-bold text-green-500">
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
          </Routes>
          <MusicPlayer />
        </div>
      </PlayerProvider>
    </BrowserRouter>
  );
}

export default App;