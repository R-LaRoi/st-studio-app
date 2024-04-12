import './connect.css'
import ContactCards from '../../Components/contactCards'
import Navigation from '../../Components/Navigation'
import Footer from "../../Components/Footer"




export default function Page ()  {


return(
  <>

<Navigation />

  <header className="ct-header ">
    
                <h1 className='contact-h1'> Happy to hear from you.
                </h1>
                 <h3 className='contact-h3'>Let's connect and explore how we can build together.</h3>
                       <div className="">
            
            </div>
  

</header>

<ContactCards/>

<Footer/>
  </>
)}