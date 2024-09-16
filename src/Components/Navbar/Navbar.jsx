import {  NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect,logout ,user,isAuthenticated,isLoading} = useAuth0();

  if(isLoading){
    return <div className="text-2xl font-serif">Loading....</div>
  }

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
              
               <span>
                 {
                  isAuthenticated && <p className="text-sm font-semibold">
                    Welcome , {user.name}
                  </p>
                 }
               </span>
              {
                isAuthenticated ? <a className="bg-black text-white rounded-md p-1"><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
               </button></a> : <a className="bg-black text-white rounded-md p-1"><button onClick={() => loginWithRedirect()}>Log In</button></a>
              
              }
              
              
           </div>
           
       </div>
       </div>
       
  )
}

export default Navbar;