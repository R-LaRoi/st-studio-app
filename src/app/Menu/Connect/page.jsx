import './connect.css'
import ContactCards from '../../Components/contactCards'
import Navigation from '../../Components/Navigation'





export default function Page ()  {


return(
  <>

<Navigation />

  <header className="ct-header">
    
                <h1 className='contact-h1'> Happy to hear from you.
                </h1>
                 <h3 className='contact-h3'>Dynamic creative developer, conceptualizing and delivering user-friendly solutions.</h3>
                       <div className="">
                <div className="py-5 px-4 masthead-cards">
                       {/* <div className=" ct-shape"></div> */}
                </div>
            </div>
  

</header>

<ContactCards/>


  </>
)}