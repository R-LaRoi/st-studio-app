import './projects.css'
import projectData from './Data'
// import twe from './jump.png'

export default function Page(){

let proCards = projectData.map((item, index)=> {


if(index < 8)

return(

 <div className="" key={item.id} > 
 
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-900 transition-all duration-300 group-hover:scale-[10]"></span>

{/* svg item  */}
        <div className="relative z-10 mx-auto max-w-md">
          
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-400 transition-all duration-300 group-hover:bg-sky-400">

                    {item.svg}
                    </span>

<span className=' ' >
 <img  src={item.photo}  className="rounded-full h-12 w-12" />
	<h1 className=''>
 {item.title}</h1>
 </span>
   {/* <p className='card-desc'>{item.text}</p>  */}

                    <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{item.text}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href={item.link} className="text-sky-600 transition-all duration-300 group-hover:text-white">Website
                        &rarr;
                    </a>
                </p>
            </div>
</div></div></div>
  )

})



return(

<section className="">
  <div className='pro-container'>

  <header className="masthead">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7 py-5">


                <h1 className="mb-4"> Designed to go places.
             <h2 className="m-0">Dynamic creative developer, conceptualizing and delivering user-friendly solutions.</h2>


                </h1>
                   
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
  
   <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">

    {proCards}
	
</div>
</section>

</section>

)
 
}















