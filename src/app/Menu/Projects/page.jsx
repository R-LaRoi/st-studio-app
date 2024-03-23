import './projects.css'
import projectData from './Data'


export default function Page(){

let proCards = projectData.map((item, index)=> {

if(index < 8)

return(

  <div class="box1" key={item.id}> 
 <small> 2024
    </small>
    <br/>    <br/>
   <img  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"  class="rounded-full h-12 w-12" />

    <br/>
	<h1 className='card-title'>{item.title}</h1>
  <p className='card-desc'>{item.text}</p>


<br/><br/>

<svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>github

  </div>
  
)

})



return(

<section className="pro-section">
<div className='pro-container'>
  <div className="pro-header">PROJECTS
  <div className="pro-sub">L'informatique est vaste et les langages naissent presque à tout moment, je fais tout mon possible pour être à la hauteur afin de répondre au besoin de mes clients et d'apporter de l'aide aux nouveaux développeurs.</div>
  </div>
  </div>
  <div className='h_line'></div>

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
