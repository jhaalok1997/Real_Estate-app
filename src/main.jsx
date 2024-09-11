import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home1.jsx'
import Testimonials from './Components/Testimonial/Testimonials.jsx'
import Contact from "./Components/Contact/ContactUs.jsx"
import AboutUs from "./Components/About/AboutUs.jsx"
import Solution1 from "./Components/Solution/Solution1.jsx"


const router = createBrowserRouter([
     {
      path:'/',
      element:<App/>,
      children:[
        {
          path:"/Home",
          element:<Home/>,
        },
        {
          path:"/Solution",
          element:<Solution1/>,
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
      ],
     
     },
     
])
  

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
     <RouterProvider router = {router}/>
  
  </StrictMode>,
)
