// Accordion.js
import { useState } from 'react';

const items = [
    {
      title:"What services do you offer ?",
      content:"We provide a range of real estate services including buying, selling, renting, and property management. Our team is dedicated to helping you find your dream home or investment property.",
    },
    
    {
      title:"How can I contact your team?",
      content:"You can reach us via email at contact@realestate.com or call us at +91(123)456-7890. Our office is located at 123 Main Street, City, Country.",
    },
    {
      title:"What is the process for buying a home?",
      content: "The home buying process involves several steps: getting pre-approved for a mortgage, finding a home, making an offer, getting a home inspection, and closing the deal. Our agents will guide you through each step.",
    },
    {
      title:"Do you offer property management services?",
      content:"Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance, and repairs. We ensure your property is well-maintained and profitable.",
    },
    {
      title:"How can I schedule a property viewing?",
      content:"To schedule a property viewing, please fill out the contact form on our website or call us directly. We will arrange a convenient time for you to visit the property.",
    },
  
  ]

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="  p-12  h-[90vh]">
        <h1 className="text-2xl text-center font-serif">Requested Questions from Clients </h1><br/>
    <div className="accordion bg-slate-500 h-[40vh] w-[90vw] p-4 rounded-xl">
        
      {items.map((item, index) =>(
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <h3 className="font-serif">{item.title}</h3>
            <span className="flex justify-end text-2xl cursor-pointer ">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
))}
    </div>
    </div>
  );
};

export default Accordion;
