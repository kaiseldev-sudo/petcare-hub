import React from 'react'
import { motion } from "framer-motion";

const ClimbingPets = () => {
  return (
    <motion.img
        initial={{ opacity: 1, x: -250 }}
        whileInView={{ opacity: 1, x: -115 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        src="./pets-2.png"
        alt="Happy pets"
        className="absolute w-full max-w-sm -translate-x-1/2 translate-y-1/2 bottom-3 lg:max-w-xl lg:bottom-4 lg:-translate-x-1/2 lg:translate-y-1/2"
    />
  )
}

export default ClimbingPets
