import { X } from 'lucide-react'
import React from 'react'
import { CgMenuRight } from "react-icons/cg";
import { motion, AnimatePresence } from 'framer-motion'

const HamburgerMenu = ({menuOpen, toggleMenu}) => {
  return (
    <button
      onClick={toggleMenu}
      className='lg:hidden text-2xl text-gray-700 focus:outline-none'
      aria-label="Toggle menu"
    >
      <AnimatePresence mode='wait' initial={false}>
        {menuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X className='text-red-500' />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <CgMenuRight />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default HamburgerMenu
