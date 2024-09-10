import {  NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <div className="">
       <div className="p-3 text-black flex space-x-24 bg-purple-100">
           <h1 className="text-2xl font-bold">Real Estate</h1>
           <div className=" md:space-x-16 ">
             <a><NavLink to={"/Home"}>Home</NavLink></a> 
             <a><NavLink to={"/Solution"}>Solution</NavLink></a> 
              <a><NavLink to={"/Contact"}>Contact Us</NavLink></a>
              <a><NavLink to={"/Testimonials"}>Testimonials</NavLink></a>
              <a>About Us</a>
           </div>
           
       </div>
       </div>
      
       
           
    
  )
}

export default Navbar;