import aboutimg1 from "./Aimages/img1-pexels-About-7061663.jpg"

const AboutUs = () => {
  return (
    <>
    
       <div>
             <img className="h-[70vh] w-screen" src={aboutimg1} alt="about Image"/>
          <div>
              <div>
                    <span>Luxury Living</span>
              </div>
              <div>
                     <span>Your trusted Real Estate Partner</span>
              </div>
                
           </div>
       </div>
    </>
  )
}

export default AboutUs;