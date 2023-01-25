import "./FooterStyles.css"

import React from 'react'

import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneSquare} from 'react-icons/fa'
import { GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone"><h1><FaPhoneSquare size={20} style={{color:"#fff",marginRight:"1rem", verticalAlign:"bottom"}}/>(+66)90-816-2681</h1></div>
                <div className="email"><h1><GrMail size={20} style={{color:"#fff",marginRight:"1rem" , verticalAlign:"bottom"}}/>peeratada@gmail.com</h1></div>
                    </div>
            <div className="right">
                <h3 className="follow-me">Follow me:</h3>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem",}}/>
                    <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem",}}/>
                    <FaInstagram size={20} style={{color:"#fff",marginRight:"1rem",}}/>
                    <FaGithub size={20} style={{color:"#fff"}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer