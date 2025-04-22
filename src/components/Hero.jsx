import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center flex-col text-center mt-30 pb-10 px-10'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug mb-4">
          Manage Your Pet’s Health, Schedule, and Care — All in One Place
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          From vaccinations and vet visits to feeding and grooming routines,
          PetCare Hub keeps your furry friend happy and healthy.
        </p>
      </motion.div>

      <button>Get Started</button>

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        src="./pets-1.png"
        alt="Happy pets"
        className="w-full max-w-md lg:max-w-xl mt-6"
      />
      
      <img className='absolute -bottom-50 -right-100' src='./pets-3.png'/>
      <img className='absolute -bottom-50 -left-100 scale-x-[-1]' src='./pets-3.png'/>
    </div>
  )
}

export default Hero
