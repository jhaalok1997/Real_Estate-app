
import './App.css'
import Footer from './Components/footer/Footer.jsx';
//import Home1 from "./Components/Home/Home1.jsx"
//import Solution from './Components/Solution/Solution.jsx';
//import About from './Components/About/AboutUs.jsx';
//import Testimonials from './Components/Testimonial/Testimonials.jsx';
//import Contact from './Components/Contact/ContactUs.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  
    <>
      <Navbar/>
      <Outlet/>
      
    {/*
    <Home1/>
    <Solution/>
    <Contact/>
    <About/>
    <Testimonials/>*/}

    <Footer/>
    
    </>
  )
}

export default App;
