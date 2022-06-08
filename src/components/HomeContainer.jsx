import React from "react"
import Delivery from "../img/delivery.png"

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      {/* left side of the section */}
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full drop-shadow-xl">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          adipisci tempore quam sint temporibus ad exercitationem praesentium
          consectetur. Corrupti ad exercitationem reiciendis dolore! Debitis
          vero ab vel quam, vitae ut neque? Ipsam molestiae quasi dolorem
          quisquam quod, magnam expedita ea saepe nobis libero natus mollitia
          animi deleniti? Expedita, suscipit quod.
        </p>

        <button className="bg-gradient-to-br from-orange-400 to-orange-400 w-full md:w-auto px-4 py-2 rounded-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
    </section>
  )
}

export default HomeContainer
