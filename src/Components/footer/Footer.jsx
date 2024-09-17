import {  NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200 h-[100vh] w-screen relative flex justify-center  " >
    
        <div className="bg-orange-400 h-1/3 w-[90vw] text-center rounded-xl lg:w-[40vw] pt-8 mt-44 ">
            <h1 className="pt-6 font-serif font-semibold">Subscribe to Our Channel </h1>
            <div className="p-6 flex justify-center space-x-3 lg:justify-center ">
                <input className="rounded-lg p-2 lg:p-4" placeholder=" email address ...."/>
                <button className="p-2 bg-slate-500 rounded-lg text-center">Submit</button>
              
            </div>
            <h1 className="text-2xl font-serif font-bold pt-8 ">Real Estate </h1>
        </div>

          {/* footer Links */}

        <div className="absolute top-24  ">
            <div className="  text-black flex flex-wrap  lg:space-x-56 left-64 ">
           
             <div className=" space-x-8 lg:space-x-40 font-serif  ">
               <a className="hover:text-blue-600 hover:underline"><NavLink to={"/Home"}>Home</NavLink></a> 
               <a className="hover:text-blue-600 hover:underline"><NavLink to={"/Solution"}>Solution</NavLink></a> 
               <a className="hover:text-blue-600 hover:underline"><NavLink to={"/Contact"}>Contact</NavLink></a>
               <a className="hover:text-blue-600 hover:underline"><NavLink to={"/Testimonials"}>Testimonials</NavLink></a>
               <a className="hover:text-blue-600 hover:underline"><NavLink to={"/About"}>About</NavLink></a>
               </div>
            </div>
        </div>

      <div className="absolute top-[90vh]">
      
        <h3 className=" font-semibold text-center">CopyRight 2024</h3>
        <span className=" font-semibold">All Rights reserved by Real Estate</span>
       </div>
       
    </div>
    
  )
}

export default Footer