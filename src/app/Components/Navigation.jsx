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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>


</button>

<div 
className="offcanvas offcanvas-start canvas-body" 
data-bs-scroll="true" 
tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
    <button type="button" className="btn-close nav-xbtn" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
  </div>
  <div className="offcanvas-body">
    <div className="nav-text">

    </div>
{/* < ul className="off-nav-list"> */}

<div className="nav-container">
  <div className= "">
    <div className="col-sm-3">
   <Link href ="/Menu/Projects/" className="move">
    <div className="nav-container">
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
     <div className="nav-container" >
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
     <div className="nav-container" >
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
