import './projects.css'
import projectData from './Data'
// import twe from './jump.png'

export default function Page(){

let proCards = projectData.map((item, index)=> {


if(index < 8)

return(

  <div class="" key={item.id}> 
 <small> <span className='git'>{item.svg}</span>
    </small>
    <br/>   
    <span className='card--'>
<img  src={item.photo}  className="rounded-full h-12 w-12" />
	<h1 className='card-title'>
  {item.title}</h1>

</span>
   <p className='card-desc'>{item.text}</p> 

  <ul>
   
     <br></br>  
<li className='card-link'>
  <a href={item.link}> 
 Website  
</a></li>
<li className='card-link'>
  <a href={item.git}> 
Github </a></li>
  </ul>

{/* </span></a>
<a href={item.git} > 
Github
<span> 

  </span></a>
</li> */}
<br/><br/>

{/*github */}

  </div>
  
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
                    <div className="d-flex">
                        <a href="#" className="w-50 pr-3 pb-4">
                            <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                        <i className="fa fa-pencil fa-4x my-2"></i>
                                    </div>
                                  github
                                </div>
                            </div>
                        </a>
                        <a href="#" className="w-50 pl-3 pb-4">
                            <div className="card border-0 border-bottom-blue shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                        <i className="fa fa-th fa-4x my-2"></i>
                                    </div>
                                 connect
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="d-flex">
                    </div>
                    <div className="shape"></div>
         
                </div>
            </div>
        </div>

    </div>

</header>
    </div>
<header>



</header>



{/* <div className='pro-container'>
  <div className="pro-header">PROJECTS
  <div className="pro-sub">L'informatique est vaste et les langages naissent presque à tout moment, je fais tout mon possible pour être à la hauteur afin de répondre au besoin de mes clients et d'apporter de l'aide aux nouveaux développeurs.</div>
  </div>
  </div>
  <div className='h_line'></div> */}

<section>
  <div class="wrapper">

    {proCards}
	{/* <div class="box1"><small></small><br/>
   <img  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"  class="rounded-full h-8 w-8" />
	The description</div>
	
  <div class="box2"><small>2</small>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium!</div>
	<div class="box3"><small>3</small>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit ipsam adipisci facilis, quia quibusdam voluptate suscipit alias dolores blanditiis ullam quae accusamus, ab velit id. At, sunt dicta. At ipsa amet accusantium. </div>
	<div class="box4"><small>4</small>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est distinctio perferendis nihil asperiores cum labore, commodi, ducimus! Labore explicabo, officia, dolorem praesentium tenetur vero recusandae nostrum. Exercitationem dolore sit vero.</div>
</div> */}
</div>
</section>

</section>

)
 
}
