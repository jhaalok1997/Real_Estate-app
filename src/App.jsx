
import './App.css'
import Footer from './Components/footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  
    <>
  
        <Navbar/>

        
        
            <Outlet/>

        <Footer/>
    
    </>
  )
}

export default App;
