'use client';
import React from "react"
import Link from "next/link"
import './Stylesheets/nav.css'
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>


</button>

<div 
className="offcanvas offcanvas-start canvas-body" 
data-bs-scroll="true" 
tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title hover:bg-yellow-400 rounded-md p-2" id="offcanvasWithBothOptionsLabel" >

<Link href ="/" >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
		<path strokeDasharray="15" strokeDashoffset="15" d="M4.5 21.5h15">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
		</path>
		<path strokeDasharray="15" strokeDashoffset="15" d="M4.5 21.5V8M19.5 21.5V8">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="15;0" />
		</path>
		<path strokeDasharray="24" strokeDashoffset="24" d="M9.5 21.5V12.5H14.5V21.5">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.6s" values="24;0" />
		</path>
		<path strokeDasharray="30" strokeDashoffset="30" strokeWidth="2" d="M2 10L12 2L22 10">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.6s" values="30;0" />
		</path>
	</g>
</svg>
</Link>
    </h5>
    <button type="button" className="btn-close nav-xbtn hover:bg-slate-50 rounded-lg pt-4" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
  </div>
  <div className="offcanvas-body">
    <div className="nav-text">

    </div>


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
      {/* <Link href ="/Menu/Studio"> */}
        <a href="https://www.rachelstroy.com/" target="_blank"> 
     <div className="nav-container" >
      <div className="body">
    <div className="textContainer">
            <p className="primary">studio
            <span style={{color: "#FFE627"}}>_</span> </p>
          <p className="secondary">art&design</p>
        </div>
      </div>
    </div>
    </a>
   {/* </Link> */}

    </div>

  <div className="col-sm-3">
      <Link href ="/">
     <div className="nav-container" >
      <div className="body">
    <div className="textContainer">
          <p className="primary">MAIN</p>
          <p className="secondary">MAIN</p>
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


