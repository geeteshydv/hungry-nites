import React from "react";
import Logo from "../images/hungryNites_logo4.png";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center bg-[#FEFDB8] shadow-lg sticky top-0 z-10">
        <img alt="Logo" src={Logo} className="w-20" href="/" />
        <div className="right-0 absolute">
          <ul className="inline-flex space-x-9 m-4 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
