import React from "react"
import HeroImg from "../components/HeroImg";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    className="home"
    initial={{width: 0}}
    animate={{width: "100%"}}>
      <HeroImg/>
    </motion.div>
  )
}

export default Home