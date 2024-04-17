'use client';
import "./Components/Stylesheets/pages.css";
import './Components/Stylesheets/nav.css'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './Components/mousePosition';
import AltMenu from './Components/altMenu'
import Footer from './Components/Footer'

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 700 : 690;


  return (

    <main className='main'>
   <motion.div 
        className='mask'
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration:0.3}}
      ></motion.div>

<div className="">
  <div className="flex flex-wrap items-center justify-between mx-auto p-3 z-99">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
       <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24">
	<path fill="white" d="M9.234 15.23q-2.505 0-4.254-1.745q-1.75-1.745-1.75-4.25q0-2.506 1.746-4.255q1.745-1.75 4.251-1.75q2.506 0 4.255 1.746q1.749 1.745 1.749 4.251q0 2.506-1.746 4.255q-1.745 1.749-4.25 1.749m1.15 5.538q-.667 0-1.141-.474q-.475-.475-.475-1.141v-.477q0-.292.195-.488q.196-.195.494-.214q1.74-.077 3.24-.692q1.5-.616 2.735-1.85q1.234-1.235 1.85-2.735q.615-1.5.692-3.24q.02-.298.214-.494q.196-.195.488-.195h.477q.666 0 1.14.475q.475.474.475 1.14v8.77q0 .666-.474 1.14q-.475.475-1.141.475z" />
</svg>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
</div>
</div>

<div className='hero-container'>
  <div className="">
    <div className="box">
      <h1 className=" h-text mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white drop-shadow-md ">In pursuit of joy <div className=" ">by design.</div></h1>
    
<div className="title">
 <span className="block"></span>
<h1 className="drop-shadow-md " id="meet ">Meet Rachel.<span></span></h1>
</div>
 <div className="role pt-6">    
 <div className="block"></div>
 <p className="sub-text drop-shadow-md">  Developer | UX Designer</p>
</div>
 <AltMenu />  

</div>    
</div> 
</div> 

 <Footer />

</main>


  );
}