//import logo from '../assets/images/logogo.jpg' <img src={logo}></img>
import { FaBasketballBall } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-p3-blue w-full py-3 px-6 shadow-md mb-7">
        <div className="max-w-7xl flex items-center">
          <div className="flex items-center gap-2">
            <FaBasketballBall className="text-xl text-white" />
            <h1 className="text-white text-xl font-semibold my-0">Convertaphile</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
