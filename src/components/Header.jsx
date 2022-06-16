import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
import { motion } from "framer-motion"

// firebase's auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider"

// image assets
import Image from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { actionType } from "../context/reducer"

const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)

  const loginHandler = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider)

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })

      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logoutHandler = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null,
    })
  }

  const showCartHandler = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }

  return (
    <header className="fixed z-50 w-screen h-auto bg-primary p-3 px-4 md:p-6 md:px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Image} alt="logo" />
          <p className="text-headingColor font-bold text-xl cursor-pointer">
            City
          </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Service
            </li>
          </motion.ul>

          <motion.div
            whileTap={{ scale: 0.6 }}
            onClick={showCartHandler}
            className="relative flex justify-center items-center cursor-pointer"
          >
            <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute w-5 h-5 bg-cartNumBg rounded-full flex justify-center items-center -top-2 -right-2">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </motion.div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={loginHandler}
              className="block w-10 min-w-[40px] h-10 max-w-[40px] drop-shadow-xl cursor-pointer rounded-full"
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "romeomuralikrishnan@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      onClick={() => setIsMenu(false)}
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logoutHandler}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <motion.div
          whileTap={{ scale: 0.6 }}
          onClick={showCartHandler}
          className="relative flex justify-center items-center cursor-pointer"
        >
          <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute w-5 h-5 bg-cartNumBg rounded-full flex justify-center items-center -top-2 -right-2">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </motion.div>

        <Link to="/" className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Image} alt="logo" />
          <p className="text-headingColor font-bold text-xl cursor-pointer">
            City
          </p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={loginHandler}
            className="block w-10 min-w-[40px] h-10 max-w-[40px] drop-shadow-xl cursor-pointer rounded-full"
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "romeomuralikrishnan@gmail.com" && (
                <Link to="/createItem">
                  <p
                    onClick={() => setIsMenu(false)}
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100  px-4 py-2"
                >
                  Home
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100  px-4 py-2"
                >
                  Menu
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100  px-4 py-2"
                >
                  About Us
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100  px-4 py-2"
                >
                  Service
                </li>
              </ul>

              <p
                onClick={logoutHandler}
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
