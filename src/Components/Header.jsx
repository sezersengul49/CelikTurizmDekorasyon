import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex justify-between items-center bg-white px-4 md:px-8 py-4 shadow-lg">
      {/* Logo Alanı */}
      <div className="flex items-center">
         <Link to={"/"}>
        <img
          className="w-12 h-auto object-contain md:w-16"
          src="/logo.jpeg"
          alt="Logo"
        />
        </Link>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 text-xl md:text-3xl font-extrabold ml-2 md:ml-4">
          ÇELİK TURİZM DEKORASYON
        </h1>
      </div>

      {/* Hamburger Menü Butonu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Menü Alanı */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-auto absolute md:static top-16 left-0 bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm md:text-base text-black font-medium px-4 py-4 md:py-0">
          <li
            className={`cursor-pointer transition duration-300 ${
              isActive("/") ? "text-green-500 font-bold" : "hover:text-red-500"
            }`}
          >
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ${
              isActive("/about")
                ? "text-green-500 font-bold"
                : "hover:text-red-500"
            }`}
          >
            <Link to={"/about"}>Hakkımızda</Link>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ${
              isActive("/services")
                ? "text-green-500 font-bold"
                : "hover:text-red-500"
            }`}
          >
            <Link to={"/services"}>Hizmetlerimiz</Link>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ${
              isActive("/ourCars")
                ? "text-green-500 font-bold"
                : "hover:text-red-500"
            }`}
          >
            <Link to={"/ourCars"}>Araçlarımız</Link>
          </li>
          <li
            className={`cursor-pointer transition duration-300 ${
              isActive("/contact")
                ? "text-green-500 font-bold"
                : "hover:text-red-500"
            }`}
          >
            <Link to={"/contact"}>İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
