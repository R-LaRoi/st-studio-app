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