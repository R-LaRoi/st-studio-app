import React from "react"
import Link from "next/link"
export default function Navigation() {

return (
<nav>
  <button 
  className="btn btn-primary off-nav-btn" 
  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvasWithBothOptions"
  href="#offcanvasExample" 
  role="button" 
  aria-controls="#offcanvasWithBothOptions">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

</button>

<div 
className="offcanvas offcanvas-start canvas-body" 
data-bs-scroll="true" 
tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">S _ R</h5>
    <button type="button" className="btn-close off-nav-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="nav-text">

    </div>
{/* < ul className="off-nav-list"> */}

<div className="container ">
  <div className= "">
    <div className="col-sm-3">
   <Link href ="/Menu/Projects/" className="move">
    <div className="container">
      <div className="body">
    <div className="textContainer">
          <p className="primary">projects</p>
          <p className="secondary">projects</p>
        </div>
      </div>
    </div>
</Link>

    </div>

    <div className="col-sm-3">
      <Link href ="/Menu/Connect">
     <div className="container" >
      <div className="body">
    <div className="textContainer">
          <p className="primary">connect</p>
          <p className="secondary">meet_rachel</p>
        </div>
      </div>
    </div>
</Link>

    </div>
    <div className="col-sm-3">
      <Link href ="/Menu/Studio">
     <div className="container" >
      <div className="body">
    <div className="textContainer">
            <p className="primary">studio
            <span style={{color: "#FFE627"}}>_</span> </p>
          <p className="secondary">art&design</p>
        </div>
      </div>
    </div>
   </Link>

    </div>
  </div>
</div>

</div>

      </div>

</nav>
)}

{/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <a className="navbar-brand" href="#">Navbar</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
