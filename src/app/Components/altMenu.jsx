'use client';

import Link from "next/link";

export default function AltMenu() {
return(
  

<div className="link-menu">
<div className= "link-row-3">
    <div className="">
   <Link href ="/Menu/Projects/" className="move">
    
    <div className="textContainer">
          <p className="primary">projects</p>
          <p className="secondary">projects</p>
       
    </div>
</Link>
    </div>

    <div className="">
      <Link href ="/Menu/Connect">
  
    <div className="textContainer">
          <p className="primary">connect</p>
          <p className="secondary">@rachel</p>
     
    </div>
</Link>

    </div>
    <div className="">
      <Link href ="/Menu/Studio">
     
    <div className="textContainer">
            <p className="primary">studio
            <span style={{color: "#FFE627"}}>_</span> </p>
          <p className="secondary">art&design</p>
        </div>
     
   </Link>

    </div>
  </div>
</div>

  );
}





