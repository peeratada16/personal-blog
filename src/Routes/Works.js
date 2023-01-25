import React from 'react'
import { motion } from "framer-motion";





const Works = () => {
  return (
    <div>
    <motion.div
    className="work"
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity:1 }}
    transition={{bounce: 0}}
    >
  </motion.div>
    </div>
  )
}

export default Works