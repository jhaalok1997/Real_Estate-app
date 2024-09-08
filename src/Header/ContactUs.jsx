import { useState } from "react"

const ContactUs = () => {
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
    <div className=" bg-orange-200 h-screen w-screen relative ">
        <div className=" text-center p-14 lg:text-start absolute top-28">
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

        <div className="pt-[450px]  text-center  lg:p-40  ">
          <div className="">
              <span className="text-2xl font-serif font-semibold text-blue-400 lg:text-4xl">Find Your Dream Home</span>
              <br/>
             

  

    <form onSubmit={handleSubmit}>
      <div className="text-md p-4">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          placeholder=" Your first name..."
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="p-1 text-md">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder=" Your last name..."
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="p-1 text-md">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="p-1 text-md">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className="bg-red-500 rounded-md" type="submit">Join us</button>
    </form>

  


           </div>
        </div>
    </div>
  )
}

export default ContactUs