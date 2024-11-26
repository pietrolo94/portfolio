import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen text-gray-800 dark:text-gray-200 flex items-center justify-center overflow-hidden pt-24">
      {/* Background Animation */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="#8a2be2"
          d="M0,200 C150,300 650,0 800,200 L800,600 L0,600 Z"
          className="dark:fill-purple-700"
        />
      </motion.svg>

      {/* Floating Particles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-500 dark:bg-purple-300 rounded-full absolute"
              initial={{ x: Math.random() * 800 - 400, y: Math.random() * 600 - 300, opacity: 0 }}
              animate={{
                x: Math.random() * 800 - 400,
                y: Math.random() * 600 - 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 drop-shadow-md">
          Hi, I'm Pietro
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
          Happy to see you here.
        </p>
        <motion.a
          href="#about"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;




  
  
  
