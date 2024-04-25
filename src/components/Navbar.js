import React from "react";
import Logo from "../images/hungryNites_logo4.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex items-center bg-[#FEFDB8] pr-4 shadow-lg sticky top-0 z-10">
        <Link to="/">
          <img alt="Logo" src={Logo} className="w-20" />
        </Link>
        <div className="ml-auto">
          <ul className="inline-flex space-x-9 text-lg font-semibold">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-red-500">
              Contact
            </Link>
            <Link to="/login" className="hover:text-red-500">
              Login
            </Link>
            <Link to="/cart" className=" hover:text-red-500">
              Cart ({cart.length} items)
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
