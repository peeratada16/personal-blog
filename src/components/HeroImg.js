import "./HeroimgStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const HeroImg = () => {
  return (
    <div>
        <div className="topbg"><motion.h1 className="greeting1"  
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
        bounce: 0.25,
        }}>Hi there!</motion.h1>
        
        <p className="deco2022">//2022</p></div>

        <div className="topbg2"><div className="greeting2">
        
        <motion.h1 className="name"
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.,
        }}>
        I’m Peeratada Poolpho.
        </motion.h1>
        <h2 className="position">Quality analyst and hobbyist web developer</h2></div>
        <div className="bg2content"><p className="about">about this site</p>
          <p className="about-content">I created this site as my first project for my web development
          journey. <br/><br/> Thanks for visiting, let’s explore more <Link to={"/about"} className="link">about me</Link>.
          </p>
          </div>
          </div>
   
        </div>

  )
}

export default HeroImg