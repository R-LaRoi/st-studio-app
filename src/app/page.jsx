'use client';
import "./Styles/pages.css";
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './Components/mousePosition';
import AltMenu from './Components/altMenu'
import Footer from './Components/Footer'

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 700 : 690;

// backgroundColor: '#eb4f34',
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
  <div class="">
    <div class="box">
      <h1 class=" h-text mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">In pursuit of joy <div class=" ">by design.</div></h1>
    
        <div class="title">
            <span class="block"></span>
            <h1 className="" id="meet">Meet Rachel.<span></span></h1>
        </div>
 <div class="role">    
 <div class="block"></div>
 <p className="sub-text">  Developer | UX Designer</p>
</div>
 <AltMenu />  

</div>    

</div> 

  <footer className="--tag">
    <div class="texto">
        <span>
           <button className=" h-5 w-5  items-center justify-center align-center outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.rachelstroy.com/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffff" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
            
            </a>
    </button>
    
    <button className="  h-5 w-5 items-center justify-center align-center outline-none  mr-2" type="button">
      <a href="https://github.com/R-LaRoi" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#ffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
    </button>
    
    <button className=" h-5 w-5 items-center justify-center align-center outline-none mr-2" type="button"><a href="https://www.linkedin.com/in/rachel-s-978397277/" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
</button>
</span>
    </div>
</footer>

</div> 

</main>

  );
}