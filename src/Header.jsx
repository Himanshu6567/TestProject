import React, { useState } from "react";
import { FaAngellist } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between px-3 py-5 pr-5 bg-black ">
      <FaAngellist className="text-4xl text-white" />
      <GiHamburgerMenu className="text-white sm:hidden" />
      <div className="hidden space-x-2 text-white sm:block">
        <a className="hover:text-gray-400"> HOME </a>
        <a className="hover:text-gray-400">ABOUT</a>
        <a className="hover:text-gray-400">HOW IT WORKS?</a>
        <a className="hover:text-gray-400">CURRICULUM</a>
        <a className="hover:text-gray-400">CONTACT US</a>
        <a className="hover:text-gray-400">FOLLOW US </a>
      </div>
    </div>
  );
}

export default Header;
