import React from 'react'
import MyJourneyContent from '../components/MyJourneyContent';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyJourney = () => {
  return (
    <div>
      <Navbar />  
      <motion.div
    className="my-journey"
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity:1 }}
    transition={{bounce: 0}}>
      <MyJourneyContent />
  </motion.div>
    <Footer />
  
    </div>
  )
}

export default MyJourney