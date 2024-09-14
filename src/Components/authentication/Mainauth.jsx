import Login from "./Loginform"
//import Signup from "./Signupform";

import authImage from "./Authimages/Mainauth-back-image-pexels-pok-rie-33563-136317.jpg"




const Mainauth = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
         <img className="h-screen w-screen" src={authImage} alt="Background Auth image"/>
         <div className="absolute top-8" >
            
             {/*<Signup/>*/}
             <Login/>
        </div>
    </div>
   
  )
}

export default Mainauth;