"use client";
import './projects.css'
import projectData from './Data'
import Navigation from "../../Components/Navigation"

export default function Page(){

let proCards = projectData.map((item, index)=> {


if(index < 8)

return(

 <div className="" key={item.id} > 
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-5 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-11 z-0 h-10 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[35]">
        </span>

        <span className="relative z-10 mx-auto max-w-md">
            <span className="grid h-8 w-10 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                    {item.svg}
             
</span>


                    <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">

<span className=' ' >

 <img  src={item.photo}  className=" 
bg-none sm:rounded-xl backdrop-opacity-10 " />
	
 </span>
 <p className='card-title h_line'>{item.title}</p> 

                <p className='card-desc'>{item.text}</p>
            </div>
           
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href={item.link} className="text-blue-700 transition-all duration-300 group-hover:text-orange-200">View
                        &rarr;
                    </a>
                </p>
            </div>
</span></div></div>
  )

})



return(

<>

<section className="">
<Navigation />
  <div className='pro-container'>

  <header className="">
    <div className="">
        <div className="row align-items-center">
            <div className="col-lg-7 py-5">
                <h1 className> Designed to go places.
                </h1>
                    <h3>Dynamic creative developer, conceptualizing and delivering user-friendly solutions.</h3>
            </div>
            <div className="col-lg-4">
                <div className="py-5 px-4 masthead-cards">
                       <div className="shape"></div>
          
         
                </div>
            </div>
        </div>

    </div>

</header>
    </div>
<header>



</header>




<section>
  
  <div className="card-container">

    {proCards}
	
</div>
</section>

</section>
</>
)
 
}















