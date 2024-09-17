import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home1.jsx'
//import Testimonials from './Components/Testimonial/Testimonials.jsx'
import Contact from "./Components/Contact/ContactUs.jsx"
import AboutUs from "./Components/About/AboutUs.jsx"
import Solution1 from "./Components/Solution/Solution1.jsx"

import { Auth0Provider } from '@auth0/auth0-react';


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
       
      ],
     
     },
     
])
  

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     <Auth0Provider
         domain = "dev-8k08ezgxpz0mfate.us.auth0.com"
         clientId = "Jz8oNNpeQFMwVzr8mskUlycqMkwpnnGS"
         authorizationParams={{
          redirect_uri: window.location.origin
        }}>
         
       
         <RouterProvider router = {router}/>
      </Auth0Provider>
  </StrictMode>
)
