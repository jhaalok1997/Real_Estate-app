import Home from "./Home";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 h-screen w-screen">
       <div className="p-6 text-white flex space-x-24">
           <h1 className="">Real Estate</h1>
           <div className=" md:space-x-16 ">
              <link to="/"> <Home/></link>
              <a>Solution</a>
              <a>Contact Us</a>
              <a>Testimonials</a>
              <a>About Us</a>
           </div>
       </div>
     
    </div>
  )
}

export default Navbar;