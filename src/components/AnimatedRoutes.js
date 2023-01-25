import React from 'react'
import Home from "../Routes/Home";
import About from "../Routes/About";
import Experience from "../Routes/Experience";
import Works from "../Routes/Works";
import MyJourney from "../Routes/MyJourney";
import { Route, Routes, useLocation} from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/works" element={<Works />} />
      <Route path="/myjourney" element={<MyJourney/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes