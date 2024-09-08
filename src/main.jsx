import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ContactUs from './Components/Contact/ContactUs.jsx'
import Home from './Components/Home/Home1.jsx'
import Solution from './Components/Solution/Solution.jsx'
import AboutUs from './Components/About/AboutUs.jsx'


const router = createBrowserRouter([
     {
      path:'/',
      element:<App />,
     },
     {
      path: '/Home',
      element: <Home/>,
     },
     {
      path:"/ContactUs",
      element:<ContactUs/>,
     },
     {
      path:"/Solution",
      element:<Solution/>,
     },
     {
      path:"/AboutUs",
      element:<AboutUs/>,
     },
])
  
 


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     <RouterProvider router = {router}/>
  
  </StrictMode>,
)
