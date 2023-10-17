import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4  border-b-1 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">LOGO</div>

        {/* Navbar items for large screens */}
        <div className="hidden md:flex space-x-5 mr-10">
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/logs" className="text-black">
            Logs
          </Link>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white w-3/4 py-2 border-b-2 shadow-lg transition duration-500 ease-in-out transform translate-x-0">
            {" "}
            {/* Add width and transition */}
            <Link to="/" className="block text-black py-2 px-4 border-b">
              Home
            </Link>
            <Link to="/logs" className="block text-black py-2 px-4 border-b">
              Logs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
