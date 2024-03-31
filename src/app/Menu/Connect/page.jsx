import './connect.css'

import Navigation from '../../Components/Navigation'
export default function Page ()  {
  
return(
  <>

<Navigation />

  <header className="">
    <div className="">
        <div className="row align-items-center">
            <div className="col-lg-7 py-5">
                <h1 className='contact-h1'> Happy to hear from you.
                </h1>
              </div>
            <div className="col-lg-4">
                <div className="py-5 px-4 masthead-cards">
                       <div className=" ct-shape"></div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg> */}
         
                </div>
            </div>
        </div>

    </div>

</header>


<main className='connect-container'>
  <div className='contact-card-sec'>

 <div className="ct-card ct-one">
<div className="ct-card-img"></div>
  <div className="ct-card-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ct-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

     
<form class="max-w-md mx-auto"> 
 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-stone :focus:ring-white-500 dark:focus:border-white-500" placeholder="name@flowbite.com"/>


  <label for="message" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your message</label>
  <textarea id="message" rows="4" class="block p-1 w-full text-sm text-stone-900 bg-white-50 rounded-lg border border-stone-50 focus:ring-stone-50 focus:border-stone-50 dark:bg-stone-50 dark:border-stone-50 dark:placeholder-stone-50 dark:text-stone 5rk:focus:ring-blue-200 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

    <div class="grid md:grid-cols-2 md:gap-6">
   </div>
<br/>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  </div>
</div>

{/* <div className="ct-card ct-two">
<div className="ct-card-img">
</div>
  <div className="ct-card-info">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ct-svg">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
   <div class="flex items-center gap-4">
    <img class="w-15 h-15 rounded-circle" src="https://github.com/R-LaRoi/st-studio-app/assets/114012059/2db772cf-4d0f-43b9-a00b-9084e20ff9c7" alt="" style={{maxWidth:"50px"}}/>
    <div class="font-medium dark:text-white">
        <div>Rachel Stroy</div>
        <div class="text-sm text-blue-700 dark:text-white-400"> Creative Developer</div>
        
    </div>
  
</div>
<div>
     <p className="text-body text-sm  text-white-700  ">Artist and creative developer, embracing new technologies.   </p>
</div>
      <button className="ct-card-button">Read More</button>
  </div>
</div> */}
 {/* <div className="ct-card ct-three">
<div className="ct-card-img"></div>
  <div className="ct-card-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


    <div className="text-title ">

</div>
     
  <div className="text-title ">rachel@stroy.dev</div>

    
  </div>
</div> */}

</div>
</main>


  </>
)

}