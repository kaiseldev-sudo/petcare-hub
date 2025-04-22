import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
          <motion.div 
            variants={headerVariants}
            initial="hidden"
            animate={showHeader ? "visible" : "hidden"}
            className="fixed top-0 w-md flex mt-4 justify-between bg-white border border-black rounded-full px-6 py-1 items-center shadow-md z-50 lg:w-5xl lg:px-6 lg:py-3">
              
              {/* Logo */}
              <div className="flex flex-row items-center">
                <Link to="/" className='flex flex-row items-center gap-2 font-semibold'>
                  <img src="./logo.png" alt="Logo" className="w-9 h-9 lg:w-9 lg:h-9" />
                  <span className='hidden lg:inline'>PetCare Hub</span>
                </Link>
              </div>

              {/* Nav Links */}
              <nav className="hidden lg:flex space-x-4 text-gray-700 text-sm font-medium">
                <Link to="/" className='hover:text-[#6DC5D1]'>Home</Link>
                <Link to="/about" className='hover:text-[#6DC5D1]'>About</Link>
                <Link to="/features" className='hover:text-[#6DC5D1]'>Features</Link>
                <Link to="/testimonials" className='hover:text-[#6DC5D1]'>Testimonials</Link>
              </nav>
              
              {/* Mobile Nav Links */}
              <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
              <AnimatePresence>
                {menuOpen && (
                  <motion.nav
                    key="mobile-nav"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-sm top-full flex items-start justify-center flex-col mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg border shadow-md p-4 space-y-2 text-sm font-medium text-gray-700 text-left lg:hidden"
                  >
                    {['Home', 'About', 'Features', 'Testimonials'].map((label, idx) => (
                      <motion.div key={label} variants={linkVariants}>
                        <Link to={`/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`} className='hover:text-[#6DC5D1]'>
                          {label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                )}
              </AnimatePresence>


              {/* CTA */}
              <button className="border-border-black bg-[#FF914D] text-white hover:bg-[#ff8e4d] rounded-full px-4 py-2 text-sm font-medium hover:text-black transition hidden lg:inline">
                  Get Started
              </button>
          </motion.div>
  )
}

export default Header
