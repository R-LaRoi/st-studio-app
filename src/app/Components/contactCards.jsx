import React from "react"
import '../Menu/Connect/contactCards.css'


export default function ContactCards() {
  
return(

<section className='ct-grid'>

{/*  CARD ONE -- FORM----------------------------------------- */}

<div className="ct-col-1a">
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 20 20"><g fill="currentColor"><path d="M1.874 9.454a.5.5 0 0 1-.048-.952l15.715-5.855a.5.5 0 0 1 .654.61l-4.744 16.085a.5.5 0 0 1-.95.026L9.696 11.5z" opacity="0.2"/><path fill-rule="evenodd" d="M.874 7.454L8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L.826 6.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"/><path d="m16 1.293l.707.707L9 9.707L8.293 9z"/></g></svg>
    </div>
    <strong className="title text-orange-400 text-xl" > Say Hi!
      <p> Have a question? <br/>I'd be happy to connect with you.</p>
    </strong>
    <div className="ct-card__body">

    </div>
    <span>
 <form className="form">
    <div className="title">
      
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path stroke-dasharray="68" stroke-dashoffset="68" d="M3 19.5V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H5.5z">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="68;0" />
		</path>
		<path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8" opacity="0">
			<set attributeName="opacity" begin="1.05s" to="1" />
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.3s" values="10;0" />
		</path>
		<path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8" opacity="0">
			<set attributeName="opacity" begin="1.2s" to="1" />
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.3s" values="10;0" />
		</path>
		<path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4" opacity="0">
			<set attributeName="opacity" begin="1.35s" to="1" />
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.35s" dur="0.3s" values="6;0" />
		</path>
	</g>
</svg>
      Let's connect.</div>
    <input type="text" placeholder="Email" className="input"/>
    <textarea placeholder="Message"></textarea>
    <button className='ct-button'>Submit</button>

</form> 

    </span>

</div>


{/*  CARD TWO -- PROFILE ----------------------------------------- */}

 <div className='ct-col-2'>
<div
  className="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bubble-one"
>
  <div className="z-10 absolute w-full h-full peer"></div>
  <div
    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full  transition-all duration-500 bubble-two"
  >
    
  </div>
  <div
    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-36 -right-96 w-30 h-46 rounded-full transition-all duration-500 bubble-two">


<div className="w-75 flex flex-row justify-center items-center meet-card">
  <div className="card-two-text">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://github.com/R-LaRoi/st-studio-app/assets/114012059/034f2a96-0cbb-4576-81d8-711966c287ac" alt="profile-photo"/>
     <div className="text-center mt-2 text-3xl font-medium">Rachel Stroy</div>
      <div className="text-center font-normal text-lg">Software Engineer</div>
     <div className="text-center mt-2 font-light text-sm"></div>
        <div className="text-center mt-2 font-light text-sm">rachel@stroy.dev</div>
      <div className="text-center mt-2 font-light text-sm">New York</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
      Software Engineer, combining technical prowess with creative design. Let's collaborate and explore the ways we can build together.
       </p>
     </div>
     <hr className="mt-8"/>

  </div>
</div>

    
  </div>
  <div className="w-full h-full items-center justify-center flex uppercase">
  meet rachel
  </div>
</div>
  </div>


{/*  CARD THREE -- STUDIO ----------------------------------------- */}

 <div className='ct-col-2'>
<div
  className="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bubble-two"
>
  <div className="z-10 absolute w-full h-full peer"></div>
  <div
    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"
  ></div>
  <div
    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600 transition-all duration-500"
  >


<div className="social-card z-11">
  

  <a href="https://www.rachelstroy.com " target ="_blank "className="social-link2" >
    - rachelstroy.com
    - amashaus.com
    </a>
   <span>

    </span>

  
</div>

  </div>
  <a href="https://www.rachelstroy.com " target="_blank">
  <div className=" w-full h-full items-center justify-center flex uppercase">
    <span className="p-8">STUDIO_</span>
  <p>The latest. Take a look at what's new, right now.</p>

  </div>
  </a>
</div>

 
  </div>


{/*  CARD FOUR -- SOCIAL ----------------------------------------- */}
<div className="ct-col-1a">
    <div className="icon">
 <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 14 14">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.75 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m8.5 4.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0-8.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M4.76 6l4.48-2.25M4.76 8l4.48 2.25" />
</svg>
    </div>
    <strong> @links_
    </strong>
    <div className="ct-card__body">

    </div>
    <span>
<div className="social-card">
   <span>

    </span>
  <a className="social-link social-link2" href="https://www.linkedin.com/in/rachel-s-978397277/" target="_blank">
    <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
      </path>
    </svg> </a>
<a 
href="https://github.com/R-LaRoi"

className=" social-link social-link2">
  
    <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
      </path>
    </svg> 
    </a>
  
</div>

    </span>

</div>
</section>


)

}