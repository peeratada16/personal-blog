import React from 'react'
import { motion } from "framer-motion";


const Experience = () => {
  return (
  <motion.div
    className="experience"
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity:1 }}
    transition={{bounce: 0.1}}
    >
  </motion.div>
  )
}

export default Experience