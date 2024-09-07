import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ContactUs from './Header/Contactus'
import Home from './Header/Home.jsx'
import Solution from './Header/Solution.jsx'

const router = createBrowserRouter([
     {
      path:'/',
      element:<App />,
     },
     {
      path: '/Home',
      element: <Home/>
     },
     {
      path:"/ContactUs",
      element:<ContactUs/>,
     },
     {
      path:"/Solution",
      element:<Solution/>,
     },
])
  
 


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     <RouterProvider router = {router}/>
  
  </StrictMode>,
)
