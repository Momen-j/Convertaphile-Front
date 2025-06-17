//import logo from '../assets/images/logogo.jpg' <img src={logo}></img>
import { FaMugHot, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext"; // Adjust the import path as needed
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <nav className="bg-navbar w-full py-3 px-6 shadow-md mb-7 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <img src={logo}  className="w-12 h-10"/>
              <h1 className="text-navbar-text text-3xl font-semibold my-0">
                Convertaphile
              </h1>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Coffee Button */}
            <a
              href="https://coff.ee/momojo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-400 text-black font-semibold text-lg px-2 py-1.5 rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
            >
              <FaMugHot />
              Buy me a coffee
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-12 h-10 rounded-full bg-main-button text-app-text hover:opacity-80 transition-all duration-300"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? (
                <FaSun className="text-2xl" />
              ) : (
                <FaMoon className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
