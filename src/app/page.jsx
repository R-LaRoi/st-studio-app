'use client';
import "./Styles/pages.css";
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './Components/mousePosition';
import Link from "next/link";
import Navigation from "./Components/Navigation";


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 700 : 690;

// backgroundColor: "#eb4f34",
  return (
    <main main className="main"  style={{}}>

   <motion.div 
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      ></motion.div>

<Navigation/>
    <h1 className="header-text">In Pursuit Of Joy {''} <br/> By Design_
    </h1> 

<div className="link-menu">
  <div class="container">
  <div class="row">
    <div class="col-sm-3">
   <Link href ="/Menu/Projects/" className="move">
    <div className="container">
      <div className="body">
    <div className="textContainer">
          <p className="primary">projects</p>
          <p className="secondary">projects</p>
        </div>
      </div>
    </div>
</Link>
    </div>
    <div class="col-sm-3">
      <Link href ="/Menu/Connect">
     <div className="container" >
      <div className="body">
    <div className="textContainer">
          <p className="primary">connect</p>
          <p className="secondary">meet_rachel</p>
        </div>
      </div>
    </div>
</Link>
    </div>
    <div class="col-sm-3">
      <Link href ="/Menu/Studio">
     <div className="container" >
      <div className="body">
    <div className="textContainer">
            <p className="primary">studio
            <span style={{color: "#FFE627"}}>_</span> </p>
          <p className="secondary">art&design</p>
        </div>
      </div>
    </div>
   </Link>

    </div>
  </div>
</div>

</div>

</main>
  );
}