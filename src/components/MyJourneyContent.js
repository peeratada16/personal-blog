import "./MyJourneyStyle.css"
import React from 'react'
import { motion } from "framer-motion"



function MyJourneyContent() {
  
  
  return (
    <div className="bg">
<div className="content1">
        <h1 className="title">my journey.</h1></div>
        <motion.div initial={{ opacity: 0, y:-150}}
                    animate={{ y: 0}}
                    transition={{duration: 1}}
                    whileInView={{ opacity: 1}}>
        <div className="quotetitle1 "><h2>"How did it start?"</h2></div>
        <div className="pt1 ">
        <div className="pt1content "><p>My journey and passion started when I was in secondary school. I was a kid from Lopburi, Thailand. I studied in Pibulwittayalai School in the English-Math program. My high school life was quite simple but special. 
                I learned a lot of things in foreign languages, arts, and mathematics. I went really well with all of them, however, I preferred creating handcrafted artwork and speaking English. With this enjoyment,
                I was always my friend's supporter to create and lead the projects. I’m really proud of them and want to show you but unfortunately I could not bring them back.
                (It's been ages, I don’t know where they are now.)</p>
                </div>
        <div className="pt1photo"></div>
        </div></motion.div>
        <motion.div initial={{ opacity: 0}}
                    animate={{ y: 0}}
                    transition={{duration: 1}}
                    whileInView={{ opacity: 1}}>
        <div className="quotetitle2"><h2>"The next step"</h2></div>
        <div className="pt2">
            <div className="pt2content"><p>In the next step of my study life, I had to decide what I have to do next. For some reasons about my family, I decided to study for a bachelor degree in English at Naresuan University, Phitsanulok, Thailand.</p></div>
        </div></motion.div>
        <div className="journeyblock">
          </div>
          
        </div>
        
        
  )
}

export default MyJourneyContent