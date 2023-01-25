import "./AboutContentStyles.css"
import profile1 from "../assets/AboutImgAssets/Profile1.jpeg"
import profile2 from "../assets/AboutImgAssets/Profile2.JPG"


import React from 'react'
export const AboutContent = () => {
  return (
    <div>
        <div className="topbg">
        <div><h1 className="storyheader">about me</h1></div>
        </div>
        <div className="bottombg">
            <div className="imgbox"><img src={profile2} alt="prof2" className="prof2"/><img src={profile1} alt="prof1" className="prof1"/>
            <h1 className="greeting-box">Hi, greeting again!</h1>
        </div>
            </div> 
        </div>
    
  )
}
