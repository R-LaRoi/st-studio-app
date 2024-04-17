'use client';

import Link from "next/link";

export default function AltMenu() {
return(
  

<div className="link-menu drop-shadow-md ">
<div className= "link-row-3" id="link-row-3">
    <div className="">
   <Link href ="/Menu/Projects/" className="move">
    
    <div className="textContainer px-2">
          <p className="primary">projects</p>
          <p className="secondary">projects</p>
       
    </div>
</Link>
    </div>

    <div className="">
      <Link href ="/Menu/Connect">
  
    <div className="textContainer px-2">
          <p className="primary">connect</p>
          <p className="secondary">@rachel</p>
     
    </div>
</Link>

    </div>
    <div className="">
      {/* <Link href ="/Menu/Studio"> */}
    <a href="https://www.rachelstroy.com/" target="_blank"> 
    <div className="textContainer">
            <p className="primary">studio
            <span style={{color: "#FFE627"}}>_</span> </p>
          <p className="secondary">art&design</p>
        </div></a> 
     
   {/* </Link> */}

    </div>
  </div>
</div>

  );
}





