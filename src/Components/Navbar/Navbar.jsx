import {  NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <div className="w-screen">
       <div className="  p-3 text-black flex space-x-24  bg-purple-100">
           <h1 className="text-1xl font-bold ">Real Estate</h1>
           <div className="  lg:space-x-14 font-serif space-x-1 ">
             <a><NavLink to={"/Home"}>Home</NavLink></a> 
             <a><NavLink to={"/Solution"}>Solution</NavLink></a> 
              <a><NavLink to={"/Contact"}>Contact</NavLink></a>
              <a><NavLink to={"/Testimonials"}>Testimonials</NavLink></a>
              <a><NavLink to={"/About"}>About</NavLink></a>
           </div>
           
       </div>
       </div>
      
       
           
    
  )
}

export default Navbar;