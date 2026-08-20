import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"

const Home = () => <h1 className="text-5xl font-bold text-green-500">Home Page</h1>;
const Explore = () => <h1 className="text-5xl font-bold text-green-500">Explore Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen items-center justify-center bg-zinc-900">
        <Navbar />
        <Routes className="text-5xl font-bold text-green-500">
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;