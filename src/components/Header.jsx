import React from "react"
import { MdShoppingBasket } from "react-icons/md"

import Image from "../img/logo.png"
import Avatar from "../img/avatar.png"

const Header = () => {
  return (
    <header className="fixed z-50 w-screen h-auto bg-primary p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Image} alt="logo" />
          <p className="text-headingColor font-bold text-xl cursor-pointer">
            City
          </p>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transisttion-all ease-in-out ">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transisttion-all ease-in-out ">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transisttion-all ease-in-out ">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transisttion-all ease-in-out ">
              Service
            </li>
          </ul>

          <div className="relative flex justify-center items-center">
            <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
            <div className="absolute w-5 h-5 bg-cartNumBg rounded-full flex justify-center items-center -top-2 -right-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <img
            className="w-10 min-w-[40px] h-10 max-w-[40px] drop-shadow-xl"
            src={Avatar}
            alt="userprofile"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </header>
  )
}

export default Header
