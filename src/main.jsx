import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home1.jsx'
import Solution from "./Components/Solution/Solution.jsx"
import Testimonials from './Components/Testimonial/Testimonials.jsx'
import Contact from "./Components/Contact/ContactUs.jsx"
import AboutUs from "./Components/Contact/ContactUs.jsx"


const router = createBrowserRouter([
     {
      path:'/',
      element:<App />,
      children:[
        {
          path:"/Home",
          element:<Home/>,
        },
  
        {
          path:"/Solution",
          elements:<Solution />,
        },
        {
          path:"/Contact",
          element:<Contact />,
        },
        {
          path:"/About",
          element:<AboutUs />,
        },
        {
          path:"/Testimonials",
          element:<Testimonials/>,
        },
      ]
     },
     
])
  

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
     <RouterProvider router = {router}/>
  
  </StrictMode>,
)
