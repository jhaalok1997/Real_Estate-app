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
    <div className=" bg-orange-200 h-screen w-screen">
        <div className=" text-center p-20">
            <h2 className="text-2xl font-serif font-semibold lg:text-4xl gap-4">Contact Our Real Estate Team </h2>
            <br/>
            <span className="font-medium">Reach out to us for any real estate queries or services</span>
            <br/>
            <br/>
             <span>contact@realestate.com</span>
             <br/>
             <span>123 Main Street , City , Country</span>
             <br/>
             <span>+91(123)456-7890</span>
        </div>

        <div>
          <div className="pl-4 text-center">
              <span className="text-2xl font-serif font-semibold">Find Your Dream Home</span>
              <br/>
             

  

    <form onSubmit={handleSubmit}>
      <div className="text-md ">
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
      <button type="submit">Join Us</button>
    </form>

  


           </div>
        </div>
    </div>
  )
}

export default ContactUs