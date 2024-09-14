
import './App.css'
import Mainauth from './Components/authentication/Mainauth.jsx';
import Footer from './Components/footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  
    <>
        <Mainauth/>
      <Navbar/>
        
         <Outlet/>

       <Footer/>
    
    </>
  )
}

export default App;
