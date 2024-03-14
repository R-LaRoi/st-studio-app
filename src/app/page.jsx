'use client';
import styles from "./Styles/home.module.css";
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './mousePosition';


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 390;



  return (
    <main main className={styles.main}>
   
   <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      ></motion.div>


    <div className={styles.container} >
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>projects</p>
          <p className={styles.secondary}>projects</p>
        </div>
      </div>
    </div>
  

 
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>connect</p>
          <p className={styles.secondary}>meet_rachel</p>
        </div>
      </div>
    </div>


    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>studio<span style={{color: "#FFE627"}}>_</span> </p>
          <p className={styles.secondary}>art&design</p>
        </div>
      </div>
    </div>
   
</main>
  );
}