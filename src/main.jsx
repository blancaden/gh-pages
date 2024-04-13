import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/home.jsx'
import About from './routes/about.jsx'
import Contact from './routes/contact.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/contact',
    element:<Contact />
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

