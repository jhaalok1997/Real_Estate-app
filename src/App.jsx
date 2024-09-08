import Navbar from "./Components/Navbar/Navbar.jsx"
import './App.css'
import ContactUs from "./Components/Contact/ContactUs.jsx";
import Home from "./Components/Home/Home1.jsx"
import Solution from "./Components/Solution/Solution.jsx";

function App() {
  return (
  
    <div className="h-screen w-screen">
     
    <Navbar/>
    <Home/>
    <Solution/>
    <ContactUs/>
    
    </div>
  )
}

export default App;
