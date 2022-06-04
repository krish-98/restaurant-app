import React from "react"

const Header = () => {
  return (
    <header className="fixed z-50 w-screen h-auto bg-slate-300 p-6 px-16">
      Header
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full bg-red-600 p-4"></div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  )
}

export default Header
