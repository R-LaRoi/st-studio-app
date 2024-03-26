import React from "react"
import Link from "next/link";
import './buttonMenu.css'


export default function ButtonMenu() {

return(
<section>

<div className=" btn-grid">
<div className="container">
  <div className="row">
    <div className="col-2">
      <Link href ="/Menu/Projects/" className="move">
<div className="btn btn-one"></div>
</Link>
    </div>
    <div className="col-2">
      <Link href ="/Menu/Connect">
<div className="btn btn-two"></div>
</Link>
    </div>
    <div className="col-2">
      <Link href ="/Menu/Studio">
<div className="btn btn-three"></div>
</Link>
    </div>
  </div>
</div>
</div>
  </section>
)


}