import React from 'react';
import { motion } from 'framer-motion';

const letters = "Pet Lover".split("");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

const ShapeShifting = () => {
  return (
    <motion.div
      className="text-4xl md:text-6xl font-bold text-blue-800 flex gap-1 flex-wrap justify-center mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ShapeShifting;
