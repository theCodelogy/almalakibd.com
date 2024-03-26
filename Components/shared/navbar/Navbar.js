"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

// Import the image
import img from "../../../public/al-malaki-white.png";
import Link from "next/link";

// Navigation links array
const navLinks = [
  { title: "Smartphones", href: "#" },
  { title: "Feature Phones", href: "#" },
  { title: "Cases & Covers", href: "#" },
  { title: "Chargers", href: "#" },
  { title: "Samsung", href: "#" },
  { title: "Google", href: "#" },
  { title: "Huawei", href: "#" },
  { title: "Apple", href: "#" },
];

const Navbar = () => {
  // State for toggling the mobile menu icon
  const [showMediaIcon, setMediaIcon] = useState(true);

  return (
    <header className="flex flex-col justify-between">
      {/* Header content */}
      <div className="header-content bg-black text-white flex justify-between items-center">
        {/* Logo */}
        <div className="header-logo flex-1">
          <Image src={img} height={90} width={90} alt="logo" />
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white flex-1">
          <FiSearch className="text-xl ml-1 text-black" />
          <input
            className="p-2 outline-none text-black"
            placeholder="Search here..."
          />
        </div>

        {/* User Sign In and Cart */}
        <div className="flex justify-end flex-1 gap-3">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl font-semibold">Sign In</h3>
            <FaRegUser className="text-white text-lg" />
          </div>
          <div className="flex gap-2 items-center pr-2">
            <h3 className="text-xl font-semibold">Cart</h3>
            <HiOutlineShoppingCart className="text-lg" />
          </div>
        </div>

        {/* Mobile menu icon */}
        <div
          className="mobile-menu"
          onClick={() => setMediaIcon(!showMediaIcon)}
        >
          {showMediaIcon ? (
            <i className="my-icon icon-list"></i>
          ) : (
            <i className="my-icon icon-close1"></i>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white flex drop-shadow-lg mb-3 p-3 justify-center">
        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
