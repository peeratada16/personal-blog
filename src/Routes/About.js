import React from 'react'
import { AboutContent } from '../components/AboutContent';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
  <motion.div
    className="home"
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity:1 }}
    transition={{bounce: 0.1}}
    >
  <AboutContent />
  </motion.div>
    
      
    </div>
  )
}

export default About