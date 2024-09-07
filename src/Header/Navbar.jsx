//import { Link } from "react-router-dom";

import Heroimg from "../Images/1st-hero-unsplash.jpg"
import secondimg from "../Images/2nd-page-home-unsplash.jpg"

const Navbar = () => {
  return (
    <div className=" h-screen w-screen">
       <div className="p-3 text-black flex space-x-24 bg-purple-100">
           <h1 className="text-2xl font-bold">Real Estate</h1>
           <div className=" md:space-x-16 ">
              <a>Home</a>
              <a>Solution</a>
              <a>Contact Us</a>
              <a>Testimonials</a>
              <a>About Us</a>
           </div>
           
       </div>
         {/* HERO IMAGES STARTED*/} 
       <img  className="h-[88vh] w-screen " src={Heroimg} alt="Hero image "/>

       <div className="m-6 top-8 relative ">
        <div className="text-5xl font-semibold text-wrap m-4 text-amber-500 absolute bottom-44">
        <span>Discover the Beauty</span><br/>
        <span> of Real Estate</span>
        </div>

           <div className="p-5 absolute bottom-20 " >
            <p className="text-yellow-50 font-serif pt-2 text-  font-semibold">Discover the perfect place for you and your family.<br/> Find the ideal home that matches your lifestyle and <br/> preferences. Start your property search today!</p>
            </div>
        </div>


           {/* KEY FEATURES IMAGES START*/}


            
                 <div className="flex justify-center pt-8">
                      <span className="text-4xl font-serif font-semibold">Key Features</span>
                 </div>

                 <div className="relative">
                     <div className="flex justify-center p-24 lg:justify-start pl-44">
                         <img className="w-96 rounded-3xl" src={secondimg} alt="second image"/>
                     </div>

                     <div className="text-center lg:absolute top-72 left-[730px]">
                           <span className="font-semibold text-3xl font-serif">Spacious living areas </span>
                  
                        <div className=" text-center lg:p-1 ">
                            <p className="italic font-semibold text-md">Experience the comfort of spacious living areas <br/>that are perfect for relaxtion and entertainment.<br/>Our properties offer ample space for your needs.</p>
                         </div>
                     </div>
                 </div> 

                 {/**/}

                 <div className="relative">
                     <div className="flex justify-center p-24 lg:justify-start pl-44">
                         <img className="w-96 rounded-3xl" src={secondimg} alt="second image"/>
                     </div>

                     <div className="text-center lg:absolute top-72 left-[730px]">
                           <span className="font-semibold text-3xl font-serif">Spacious living areas </span>
                  
                        <div className=" text-center lg:p-1 ">
                            <p className="italic font-semibold text-md">Experience the comfort of spacious living areas <br/>that are perfect for relaxtion and entertainment.<br/>Our properties offer ample space for your needs.</p>
                         </div>
                     </div>
                 </div> 
    </div>
  )
}

export default Navbar;