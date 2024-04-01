import './connect.css'

import Navigation from '../../Components/Navigation'
export default function Page ()  {
  
return(
  <>

<Navigation />

  <header className="ct-header">
    
                <h1 className='contact-h1'> Happy to hear from you.
                </h1>
                 <h3 className='contact-h3'>Dynamic creative developer, conceptualizing and delivering user-friendly solutions.</h3>
                       <div className="">
                <div className="py-5 px-4 masthead-cards">
                       {/* <div className=" ct-shape"></div> */}
                </div>
            </div>
  

</header>

<section className='ct-grid'>
  <div className='ct-col-1'>
     <div className='ct-col-2'>
<div
  class="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bg-orange-600"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-700 transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-10 h-30 rounded-full bg-slate-50 transition-all duration-500"
  >
 <form class="form">
    <div class="title">Let's connect!</div>
    <input type="text" placeholder="Email" class="input"/>
    <textarea placeholder="Message"></textarea>
    <button>Submit</button>

</form>
  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
message icon animated 

  </div>
</div>

 
  </div>
    
    {/* 
       */}

  </div>




 <div className='ct-col-2'>
<div
  class="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bg-blue-700"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-amber-400 transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600 transition-all duration-500"
  >
    Nice to meet u,<br />Uiverse
  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  meet rachel
  </div>
</div>

 
  </div>




 <div className='ct-col-2'>
<div
  class="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bg-blue-700"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-amber-400 transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600 transition-all duration-500"
  >


<div className="social-card">
  
  <a className="social-link2">
    <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
      </path>
    </svg> </a>
  
  <a className="social-link4">
    <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
      </path>
    </svg> </a>
  
</div>

  </div>
  <div className="w-full h-full items-center justify-center flex uppercase">
  SOCIAL
  </div>
</div>

 
  </div>



  {/*


 <div className='ct-col-2'>
    <div class="ct-card">
      card 3
<div class="ct-card-img"></div>
  <div class="ct-card-info">
   
  </div>
</div>
  </div> 
  
  
  <div className='ct-col-3'>
    card 4
  </div> */}

</section>


  </>
)}