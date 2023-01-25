import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {HiBars2} from "react-icons/hi2"
import { HiOutlineXMark } from "react-icons/hi2"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    const [color, setColor] = useState(false);
    
    const changeColor = () => {
        if (window.scrollY >=100) {
        setColor(true)
    } else {
        setColor(false);
        }
    }
    
    


    window.addEventListener("scroll", changeColor);



  return (
    <div className={color ? "Header Header-bg" : "Header"}>
        <Link to="/"><h1>peeratada poolpho.</h1>
        </Link>
        <ul className={click ? "Navmenu active" : "Navmenu"}>
            <li>
                <Link to="/" onClick={"Navmenu"}>home</Link>
            </li>
            <li>
                <Link to="/about" onClick={"Navmenu"}>about</Link>
            </li>
            <li>
                <Link to="/experience" onClick={"Navmenu"}>experience</Link>
            </li>
            <li>
                <Link to="/works" onClick={"Navmenu"}>works</Link>
            </li>
            {/* <li>
                <Link to="/myjourney">my journey</Link>
            </li> */}
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ?  
            (<HiOutlineXMark size={40} style={{color:"white"}}/>
            ):(<HiBars2 size={40} style={{color:"white"}}/>)}
        </div>
        
    </div>
  )
}

export default Navbar