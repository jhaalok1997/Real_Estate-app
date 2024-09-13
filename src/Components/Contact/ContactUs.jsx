import { useState } from "react"
import Accordion from "./Accordion";



const ContactUs = (items) => {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
     message: ''
   })

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };


  return (
  <div className="h-[164vh] w-screen relative  lg:pt-8 ">
    <div className="h-[44vh] gap-4 lg:flex justify-center    ">

        <div className=" text-center p-14  ">
            <span className="text-2xl font-serif font-semibold lg:text-5xl text-blue-400">Contact Our <br/>Real Estate Team </span>
            <br/>
            <br/>
            <span className="font-2xl font-semibold">Reach out to us for any real estate queries or services</span>
            <br/>
            <br/>
             <span className="font-semibold text-1xl">contact@realestate.com</span>
             <br/>
             <span className="font-semibold text-1xl">123 Main Street , City , Country</span>
             <br/>
             <span className="font-semibold text-1xl">+91(123)456-7890</span>
        </div>


        <div className=" flex justify-center  lg:p-30  ">
          <div className=" h-[60vh] w-screen text-center pt-14 lg:w-[40vw] ">
              <span className="text-2xl font-serif font-semibold text-blue-400 lg:text-4xl ">Find Your Dream Home</span>
              
             
               <form className="space-y-3 pt-6 text-center " onSubmit={handleSubmit}>
                    <div className="text-md  ">
                     <label htmlFor="firstName">First Name: </label>
                     <input
                       className="p-2 rounded-xl border-r-black "
                       type="text"
                       id="firstName"
                       placeholder=" Your first name..."
                       name="firstName"
                       value={formData.firstName}
                       onChange={handleChange}/>
                     </div>

                     <div className="p-1 text-md">
                      <label htmlFor="lastName">Last Name: </label>
                      <input
                        className="p-2 rounded-xl"
                        type="text"
                        id="lastName"
                        placeholder=" Your last name..."
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}/>
                   </div>
         
                     <div className=" text-md">
                         <label htmlFor="email">Email: </label>
                           <input
                            className="p-2 rounded-xl pl-9 ml-3"
                             type="email"
                             id="email"
                             placeholder=" Your Email..."
                             name="email"
                             value={formData.email}
                            onChange={handleChange}/>
                      </div>

                      <div className="p-1 text-md">
                         <label htmlFor="message">Message: </label>
                           <textarea
                            className="p-2 rounded-xl pl-9 ml-3"
                             id="message"
                             placeholder=" write message ..."
                             name="message"
                             value={formData.message}
                             onChange={handleChange} />
                      </div>

                            <button className="bg-red-500 rounded-md p-2" type="submit">Join us</button>
                </form>

  


           </div>
        </div>
       


        </div>

       <Accordion items={items}/>  
        
    </div>
    
  )
}

export default ContactUs