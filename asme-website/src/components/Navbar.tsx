import { Link } from 'react-router-dom';
import { Reveal } from "./Reveal";

function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <Reveal>
          <nav className="font-helvetica font-medium bg-white/90 backdrop-blur-sm px-12 py-3 rounded-full  border border-white/20">
            <ul className="flex items-center gap-12 text-sm text-gray-800">
              <li>
                <Link to="/" className="cursor-pointer hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="cursor-pointer hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="cursor-pointer hover:text-blue-600 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/yearbook" className="cursor-pointer hover:text-blue-600 transition">
                  Yearbook
                </Link>
              </li>
              <li>
                <Link to="/links" className="cursor-pointer hover:text-blue-600 transition">
                  Links
                </Link>
              </li>
            </ul>
          </nav>
        </Reveal>
      </div>
    </>
  );
}

export default Navbar;