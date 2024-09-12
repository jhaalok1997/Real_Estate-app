import aboutimg1 from "./Aimages/img1-pexels-About-7061663.jpg"
import founderimg1 from"./Aimages/pexels-edmond-dantes-4342352.jpg"
import founderimg2 from "./Aimages/pexels-mikhail-nilov-6894003.jpg"



const AboutUs = () => {
  return (
    <>
    
       <div >
             <img className="h-[70vh] w-screen" src={aboutimg1} alt="about Image"/>
          <div className="relative flex justify-center bottom-60 bg-black">
              <div className="absolute bottom-16 flex font-semibold italic ">
                    <span className="text-black font-serif text-3xl ">Luxury Living</span>
              </div>
              <div className="font-serif italic text-yellow-400 text-center">
                     <span>Your trusted Real Estate Partner...</span>
                     <h3>Empowering clients to achieve their real estate goals with innovative solutions and outstanding services.</h3>
              </div>
                
           </div>

       </div>

        {/*page 2 */}
       
       <div className=" h-[150vh] w-screen ">
          <div className="text-center pt-12">
          <h1 className="font-serif font-semibold text-2xl">Meet Our Founders</h1><br/>
          <h5 className="font-serif italic"> Driven visionaries with a passion for revolutionizing the real estate industry</h5>
          </div>

            <div className="flex justify-center mt-12  ">
          
               <img className="m-2 h-96 rounded-lg" src={founderimg1} alt="founder image1"/>
             
               <div className="pt-44 pl-3 font-serif italic ">
                    <h4 className="font-semibold ">Edmond Dantes</h4><br/>
                    <p className="text-balance">Together ,we aim to redefine the real estate experience for our clients.</p>
               </div>
          
             </div>


             <div className="flex justify-center mt-12  ">
          
               <img className="mr-4 h-96 lg:w-[17vw] rounded-lg" src={founderimg2} alt="founder image1"/>
             
               <div className="pt-44 pl-1 font-serif italic ">
                    <h4 className="font-semibold ">Mikhail  Nilov</h4><br/>
                    <p className="text-balance">Committed to excellence in every aspect of the real estate journey.</p>
               </div>
          
             </div>

             </div>

             {/*page 3  */}

             <div className=" h-[110vh] w-screen ">
                 <div className=" font-serif text-center font-bold p-5">
                     <h1 className="text-2xl">Our Mission</h1>
                 </div>

                 <div className="flex justify-center pt-8 ">
                    <div className="bg-red-100 h-60 w-[70vw] text-center rounded-xl lg:h-40 pt-2">
                       <span className="font-serif font-semibold  ">Empowerment</span>
                       <p className="italic p-4">To empowerment in real estate involves providing opportunities for growth, leadership, and financial independence . It includes fostering inclusivity, supporting women and minorities, and creating environments where all proffessionals can thrive and achieve their full potential. </p>
                    </div>

                 </div>

                 <div className=" flex justify-center pt-8 gap-9">
                    <div className="bg-red-100 h-42 w-[30vw] text-center rounded-xl ">
                       <span className="font-serif font-semibold ">Inovation</span>
                       <p className="italic p-3">Pioneering innovative real estate serices and practices for our clients . </p>
                    </div>

                    <div className="bg-red-100 h-42 w-[30vw] text-center rounded-xl ">
                       <span className="font-serif font-semibold ">Excellence</span>
                       <p className="italic p-3">Delivering excellence in every aspect of the real estate journey . </p>
                    </div>

                    

                 </div>
                 <div className=" flex justify-center pt-8 gap-9">
                      <div className="bg-red-100 h-42 w-[30vw] text-center rounded-xl ">
                       <span className="font-serif font-semibold ">Quality Service</span>
                       <p className="italic p-3">Providing top-quality service tailored to each clients real estate needs. </p>
                       </div>

                        <div className="bg-red-100 h-42 w-[30vw] text-center rounded-xl ">
                       <span className="font-serif font-semibold ">Customer Satisfaction</span>
                       <p className="italic p-3">Ensuring customer satisfaction by exceeding expectations with our real estate expertise and personalized approach . </p>
                        </div>

                 </div>
                
                

              </div>


       
    </>
  )
}

export default AboutUs;