

const Footer = () => {
  return (
    <div className="bg-slate-200 h-screen w-screen relative flex justify-center pt-20" >
    
        <div className="bg-orange-400 h-1/3 text-center rounded-xl lg:w-[40vw]">
            <h1 className="pt-6 font-serif font-semibold">Subscribe to Our Channel </h1>
            <div className="p-5 flex space-x-3 lg:justify-center ">
                <input className="rounded-lg" placeholder=" email address ...."/>
                <button className="p-2 bg-slate-500 rounded-lg text-center">Submit</button>
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