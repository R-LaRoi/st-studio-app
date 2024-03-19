import Navigation from '../../Components/Navigation'
import "./projects.css"
export default function Page ()  {

 
return(
<section className="pro-section">
<Navigation/>
<header className='pro-header'>

Projects
<p className='pro-sub'>this is a sentence about the work I've created</p>

<div className='line-br'></div>
</header>

<div div className='pro-flex'>

<div className="card pro-card" style={{maxWidth: "640px"}} >
  <div className="card-body">
    <h5 className="card-title p-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div>
<div class="card pro-card" style={{width: "600px"}}>
  <div class="card-body">
    <h5 class="card-title p-title" >Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card pro-card" style={{width: "600px"}}>
  <div class="card-body">
    <h5 class="card-title p-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

  
</div>
</div>

</section>



)

}