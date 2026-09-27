import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 border-b border-zinc-800 h-16 px-8 flex items-center justify-between z-50">
      
      {/* Left Side: Brand Logo */}
      <Link to="/" className="text-2xl font-extrabold text-green-500 tracking-wider">
        Tapri Tunes
      </Link>

      {/* Right Side: Navigation Links */}
      <div className="flex gap-8">
        <Link to="/" className="text-zinc-400 hover:text-white font-medium transition-colors">
          Home
        </Link>
        <Link to="/explore" className="text-zinc-400 hover:text-white font-medium transition-colors">
          Explore
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;