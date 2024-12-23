"use client"
import { useState } from "react";
import { IoEarthOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Login from "../login/Login";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";


const Header = () => {
  const [isOpen,setIsOpen] = useState()
  return (
    <header className="h-auto w-full flex  flex-col  bg-white text-black m-0 p-0">
      <div className="top_Nav w-full h-10 bg-blue-dark hidden lg:block px-12 m-0 border-2 ">
        <div className="container h-full flex justify-between items-center ">
          <div
            className="time-serves text-white flex flex-1 h-full  justify-start items-center  
         "
          >
            <span className="mr-2">
              <IoEarthOutline />
            </span>
            <span>Available 24/7 at (018) 900-6690</span>
          </div>
          <p className="flex-2 flex md:justify-center justify-end items-center text-white ">
            First purchase offer: take 30% off shopwide.
            <span className="text-blue-800">
              Code applied at checkout. Exclusion apply*
            </span>
          </p>
        </div>
      </div>
      <div className="center-nav w-full h-auto flex justify-center items-center m-0 py-4 border-2">
        <div className="container flex justify-between items-center">
          <div className="menu-icons w-12 h-full lg:hidden flex  justify-center items-center text-3xl  mr-2">
            <FiMenu className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
          </div>
          <h1 className="logo flex-1 h-full lg:text-5xl  text-3xl text-bold font-play-fair flex justify-center items-center  lg:justify-start">
            TopRating
          </h1>
          <div className="left-section-center flex-2 justify-end flex h-full ">
            <div className="sale-offer w-48  h-full  flex-col justify-center items-center py-2 border border-yellow-500 hidden lg:flex">
              <span className="flex text-yellow-700 font-bold font-font-edu">
                FLASH SALE
              </span>
              <span className="flex text-yellow-500  text-sm">FROM $29</span>
            </div>
            <div className="Login_icons w-32 h-full py-4 ">
              <Login />
            </div>
          </div>
        </div>
      </div>
      <nav className="w-full h-10 flex justify-center items-center m-0 p-0  ">
        <div className="container w-full h-full  flex ">
          <ul className=
            {`${isOpen ? "w-full h-screen bg-white text-black flex flex-col border-2 border-green-600 md:border-yellow-600 md:w-72": "hidden lg:flex Links w-full  flex-1 h-auto p-0 m-0 list-none  font-bold font-mono text-[15px] uppercas tracking-widest"}`}
          >
            <h2 className=
              {
              `${isOpen ? " w-full h-12 flex justify-center items-center mt-3 mb-4 uppercase text-3xl text-black border-2 border-red-600":"hidden"}`}>Menu</h2>
            <li className=
            {
              `${isOpen ? "w-full hover:bg-gray-500 transition-all justify-start":"hover:none"} w-32 flex justify-center items-center text-gray-700 py-1`
            }
           >
              <Link
                className="w-full h-full flex justify-center items-center uppercase"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className=>
              <Link
                className="w-full h-full flex justify-center items-center uppercase"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="w-32 flex justify-center items-center text-gray-700 py-1  ">
              <Link
                className="w-full h-full flex justify-center items-center uppercase"
                href="/about"
              >
                AboutUs
              </Link>
            </li>
            <li className="w-32 flex justify-center items-center text-gray-700 py-1 ">
              <Link
                className="w-full h-full  flex justify-center items-center uppercase"
                href="/contact"
              >
                contact us
              </Link>
            </li>
            <li className="w-32 flex justify-center items-center text-gray-700 py-1  ">
              <Link
                className="w-full h-full  flex justify-center items-center uppercase"
                href="/massage-us"
              >
                massage-us
              </Link>
            </li>
          </ul>
          <div className="search_icons-cart lg:flex justify-end items-center hidden">
            <div className="search  flex justify-end items-center">
              <span className="mr-3 text-lg uppercase">search</span>
              <span className="text-xl mr-4">
                <CiSearch  />
              </span>
              <span className="text-xl ">|</span>
            </div>
            <div className="car-wish-list-icons flex justify-start items-center flex-1 text-2xl  ">
              <IoIosHeartEmpty className="mr-6 ml-4"/>
              <MdOutlineShoppingBag />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
