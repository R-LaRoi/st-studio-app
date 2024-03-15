'use client';
import "./Styles/pages.css";
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './Components/mousePosition';
import Link from "next/link";


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 390;


  return (
    <main main className="main"  style={{backgroundColor: "#eb4f34"}}>
   
   <motion.div 
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      ></motion.div>

<Link href ="/Menu/Projects/">
    <div className="container" >
      <div className="body">
    <div className="textContainer">
          <p className="primary">projects</p>
          <p className="secondary">projects</p>
        </div>
      </div>
    </div>
  
</Link>
 
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
</main>
  );
}