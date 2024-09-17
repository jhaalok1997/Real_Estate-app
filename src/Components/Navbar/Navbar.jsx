import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect,logout ,user,isAuthenticated,isLoading} = useAuth0();

  if(isLoading){
    return <div className="text-2xl font-serif">Loading....</div>
  }

  return (
    <div className="w-screen ">
       <div className=" text-white p-4  bg-black lg:space-x-44 flex  ">
           <h1 className="text-1xl font-bold ">Real Estate </h1>
           <div className="pl-6 space-x-5  lg:space-x-14 font-serif flex justify-center ">
             <a className="hover:text-blue-300"><NavLink to={"/Home"}>Home</NavLink></a> 
             <a className="hover:text-blue-300"><NavLink to={"/Solution"}>Solution</NavLink></a> 
              <a className="hover:text-blue-300"><NavLink to={"/Contact"}>Contact</NavLink></a>
       
              <a className="hover:text-blue-300"><NavLink to={"/About"}>About</NavLink></a>
              
               <span className=" lg:flex justify-end">
                 {
                  isAuthenticated && <p className="text-sm font-semibold text-white">
                    Welcome , {user.name}
                  </p>
                 }
               </span>
              {
                isAuthenticated ? <a className="bg-white text-black hover:bg-stone-400 rounded-md p-1"><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out</button></a>
                 : <a className="bg-white text-black rounded-md  hover:bg-stone-400  p-1"><button onClick={() => loginWithRedirect()}>Log In</button></a>
              
              }
              
              
           </div>
           
       </div>
       </div>
       
  )
}

export default Navbar;