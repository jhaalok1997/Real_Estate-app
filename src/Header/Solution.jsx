import sol01 from "../Images/pexels-solution-01-.jpg"
import sol02 from "../Images/pexels-ahmet-cotur-solution-02-.jpg"



const Solution = () => {
  return (
    <div className="">
          
      <div className="    lg:h-[1000px] w-screen relative ">
        <img src={sol01} alt="image"/>

        <div className="text-black  font-serif absolute p-4 top-14">
        <span className="text-2xl font-semibold">Our Services</span><br/>
        <span className="text-1xl font-bold">Discover Our Real Estate Services</span>
        </div>
        
        <div className=" bg-gray-100 top-16 left-[500px] lg:h-[950px] w-[600px] absolute flex justify-center rounded-xl" >
       <span className=" p-2 text-2xl font-semibold font-serif text-black">Our Range of Services</span><br/>
           
           <div className="absolute top-8 p-3 ">
            <img className="rounded-xl" src={sol02} alt="image2"/>
           </div>
           <ul className="absolute top-[423px] p-5 ">
             <span className="font-serif font-semibold">Expert Property Buying Assistance</span>
              <li className="italic text-purple-600">Empower your property buying journey with our expert teams guidance. We ensur a seamless process for first-time buyers and seasoned investors alike, offerinf tailored solution to align with your objectives and preferences</li>
              <br/>
              
              <span className="font-serif font-semibold">Property Selling Expertise</span>
              <li className="italic  text-purple-600">Sell your property quickly and for the best price with our professional real estate agents.We will market your property effectively,attract potential buyers,and negotiate the best deal on your behalf. </li>
              <br/>

              <span className="font-serif font-semibold">Real Estate Consultancy</span>
              <li className="italic  text-purple-600">Get expert advice and insights into the real estate market from our experinced consultants. Whether you need investment strategy development or market trend analysis, we can provide the guidance you need.</li>
              <br/>

              <span className="font-serif font-semibold">Customized Real estate Solutions</span>
              <li className="italic  text-purple-600">Tailored real estate solutions to meet your unique requirements. Whether you have specific property preferences or need personalized serices, we are here to make your real estate journey smooth and successful.</li>
           </ul>
       </div>
      </div>
       


      <div className="relative ">
    
         <div className="bg-slate-500 h-screen w-screen">
         <h2 className=" text-2xl text-wrap lg:text-3xl font-bold text-center pt-20 font-serif">What Makes Us Different from Others ?</h2>
              <div className="bg-orange-300 lg:h-32 absolute bottom-[500px] left-96 p-4 rounded-3xl font-serif">
                <span className="text-center text-2xl p-9 font-semibold">Expertise</span><br/>
                <span className="p-6 font-medium">Years of Experience</span>
              </div>
         </div>
      </div>
    
       </div>
    
  )
}

export default Solution