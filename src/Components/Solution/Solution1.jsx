import sol01 from "./Images/pexels-solution-01-.jpg"
import sol02 from "./Images/pexels-ahmet-cotur-solution-02-.jpg"
import { Outlet } from "react-router-dom"

const Solution1 = () => {
  return (
    <div className="">
       <Outlet/>
      <div className="    lg:h-[1000px] w-screen relative ">
        <img src={sol01} alt="image"/>

        <div className="text-black  font-serif absolute p-4 top-14">
        <span className="text-2xl font-semibold">Our Services</span><br/>
        <span className="text-1xl font-bold">Discover Our Real Estate Services</span>
        </div>
        
        <div className=" bg-gray-100 top-16 left-[500px] lg:h-[920px] w-[600px] absolute flex justify-center rounded-xl" >
       <span className=" p-2 text-2xl font-semibold font-serif text-black">Our Range of Services</span><br/>
           
           <div className="absolute top-8 p-3 ">
            <img className="rounded-xl hover:skew-y-6" src={sol02} alt="image2"/>
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
       


      <div className="flex-col-reverse justify-center ">
    
         <div className=" h-[550px] w-screen ">
              <h2 className=" text-2xl text-wrap lg:text-3xl font-bold text-center pt-24 font-serif flex justify-center">What Makes Us Different from Others ?</h2>

             <div className="  text-center lg: pt-20 gap-8 flex justify-center ">
                <div className="bg-slate-300 lg:h-30  bottom-[500px] left-96 p-12 rounded-3xl font-serif hover:origin-top-right rotate-3 ">
                <span className="text-center text-2xl p-9 font-semibold">Expertise</span><br/>
                <span className="p-6 font-medium">Years of Experience</span> 
                <p>98%</p>
                <span>Client Statisfaction Rate</span> 
                </div>


                 <div className="bg-slate-300 lg:h-30  bottom-[500px] left-48 p-12 rounded-3xl font-serif hover:origin-top-left rotate-6 ">
                  <span className="text-center text-2xl p-9 font-semibold">Customer-Centric</span><br/>
                  <span className="p-6 font-medium">Client Staisfaction</span>
                  <p>1.5x</p>
                  <span>Unmatched Property Listing Growth</span>
                 </div>

                 <div className="bg-slate-300 lg:h-30  bottom-[500px] left-6 p-12 rounded-3xl font-serif hover:origin-top-right rotate-3 ">
                  <span className="text-center text-2xl p-9 font-semibold">Inovation</span><br/>
                <span className="p-6 font-medium">Creative Solutions</span>
                <p>72%</p>
                <span>Properties Sold Successfully</span>
                 </div>

                 <div className="bg-slate-300 lg:h-30  bottom-[500px] left-6 p-12 rounded-3xl font-serif hover:origin-top-left rotate-6 ">
                  <span className="text-center text-2xl p-1 font-semibold">Transparency</span><br/>
                <span className="p-6 font-medium">Open Communication</span>
                <p>50+</p>
                <span>Over 50 Years Of Combined <br/> Experience in Real Estate </span>
                 </div>
            </div>

         </div>

      </div>
    
       </div>
    
  )
}

export default Solution1;