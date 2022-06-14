import React, { useEffect, useRef } from "react"
import HomeContainer from "./HomeContainer"
import { motion } from "framer-motion"
import { MdChevronRight, MdChevronLeft } from "react-icons/md"
import RowContainer from "./RowContainer"

import { useStateValue } from "../context/StateProvider"

import MenuContainer from "./MenuContainer"
import CartContainer from "./CartContainer"

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()

  const rowContainerRef = useRef()

  // useEffect(() => {}, [cartShow, rowContainerRef])

  const scrollHandler = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset
  }

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full h-auto flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 ">
            Our fresh & Healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              onClick={() => scrollHandler(-200)}
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              onClick={() => scrollHandler(200)}
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      <RowContainer
        rowContainerRef={rowContainerRef}
        flag={true}
        data={foodItems?.filter((item) => item.category === "fruits")}
      />

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  )
}

export default MainContainer
