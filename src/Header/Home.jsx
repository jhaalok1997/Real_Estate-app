import Heroimg from "../Images/1st-hero-unsplash.jpg"
import firstimg from "../Images/2nd-page-home-unsplash.jpg"
import secondimg from "../Images/3rd-home-unsplash.jpg"
import primeLoc from "../Images/hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg"


const Home = () => {
  return (
    <div>
           
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

            {/* KEY FEATURES IMAGES START  2nd page*/}


            <div className="bg-red-200 h-[335vh] lg:bg-zinc-300 ">

                 <div className="flex justify-center pt-8">
                      <span className="text-4xl font-serif font-semibold">Key Features</span>
                 </div>

                 <div className="relative">
                     <div className="flex justify-center p-20 lg:justify-start pl-40">
                         <img className="w-96 rounded-3xl" src={firstimg} alt="First image"/>
                     </div>

                     <div className=" text-center lg:absolute top-72 left-[730px]">
                           <span className="font-semibold text-3xl font-serif">Spacious living<br/> areas </span>
                  
                        <div className=" text-center lg:p-1 ">
                            <p className="italic font-semibold text-md">Experience the comfort of spacious living areas that <br/> are perfect for relaxtion and entertainment.Our <br/> properties offer ample space for your needs.</p>
                         </div>
                     </div>
                 </div> 

                 {/*  */}

                 <div className="relative">
                     <div className="flex justify-center p-24 lg:justify-start pl-40">
                         <img className="w-96 rounded-3xl" src={secondimg} alt="second image"/>
                     </div>

                     <div className="text-center lg:absolute top-72 left-[730px]">
                           <span className="font-semibold text-3xl font-serif">Modern Designs </span>
                  
                        <div className=" text-center lg:p-1 ">
                            <p className="italic font-semibold text-md">Immerse yourself in modern designs that style <br/>with functionality. Our properties showcase the latest <br/>trends in real estate architecture .</p>
                         </div>
                     </div>
                 </div> 

                 {/* */}

                 <div className="relative">
                     <div className="flex justify-center p-24 lg:justify-start pl-40">
                         <img className="w-96 rounded-3xl" src={primeLoc} alt="second image"/>
                     </div>

                     <div className="text-center lg:absolute top-72 left-[730px]">
                           <span className="font-semibold text-3xl font-serif">Prime Locations </span>
                  
                        <div className=" text-center lg:p-2 ">
                            <p className="italic font-semibold text-md">Discover properties in prime locations that offer <br/> convenience and accessibillity to key amenities.<br/> Find your dream home in the best neighborhoods. </p>
                         </div>
                     </div>
                 </div> 

             </div>

    </div>
  )
}

export default Home;