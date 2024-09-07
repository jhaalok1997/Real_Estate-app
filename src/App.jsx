import Navbar from "./Header/Navbar.jsx"
import './App.css'
import ContactUs from "./Header/Contactus.jsx";
import Home from "./Header/Home.jsx"
import Solution from "./Header/Solution.jsx";

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
