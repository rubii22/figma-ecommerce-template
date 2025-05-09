"use client";
import Link from "next/link";
import { useState } from "react";
// { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-black text-white text-sm py-2 px-4 flex items-center justify-center">
        {/* Promo Message and Language Selector Centered */}
        <div className="flex items-center justify-center gap-x-8">
          <p>
            Summer Sale for All Swim Suits and Free Express Delivery – OFF 50%!{' '}
            <a href="#" className="underline hover:text-gray-400">
              Shop Now
            </a>
          </p>
          <select
            className="bg-black text-white border-none outline-none cursor-pointer"
            defaultValue="English"
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>
      </div>

      {/* Main Navbar */}
      <main className="border-b-2 bg-neutral-100">
        <div className="w-full flex items-center justify-center bg-white h-[70px]">
          {/* All Content */}
          <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
            {/* Logo */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1">
                Exclusive
              </h1>
            </div>

            {/* Links - Static Plain Text */}
            <div
              className={`${
                open ? "translate-x-0" : "-translate-x-full"
              } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
            >
              <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
                <li className="p-4 hover:underline underline-offset-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                  <Link href="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex w-[250px] bg-gray-200 rounded-md items-center px-2">
              <input
                className="w-full p-1 bg-gray-200 outline-none"
                type="search"
                placeholder="What are you looking for?"
              />
              <IoIosSearch className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>

            {/* Wishlist (Heart) and Cart Icons */}
            <div className="flex gap-x-4 items-center">
              {/* Wishlist Icon */}
              <a href="/wishlist" className="text-gray-700">
                <FaRegHeart className="h-6 w-6 hover:text-red-500" />
              </a>

              {/* Cart Icon */}
              <a href="/cart" className="text-gray-700">
                <IoCartOutline className="h-6 w-6 hover:text-green-500" />
              </a>

              {/* Toggle Button for Mobile */}
              <button
                className="text-black block md:hidden text-3xl z-50"
                onClick={toggle}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Header;
