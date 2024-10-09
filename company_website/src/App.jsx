import 'bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useState } from 'react'
import {Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Aboutpage from './pages/Aboutpage'
import './App.css'
import Careerpage from './pages/Careerpage';
import Webdevelopment from './pages/Webdevelopment';
import Mobiledevelopment from './pages/Mobiledevelopment';
import Uiuxdevelopment from './pages/Uiuxdevelopment';
import Contactpage from './pages/Contactpage';
import Formpage from './pages/Formpage';
import Jobdetails from './pages/Jobdetails';
import Thankyou from './pages/thankyou';
function App() {

  return (
      <>
          
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<Aboutpage />} />
              <Route exact path='/career' element={<Careerpage />} />    
              <Route path='/career/:id' element={<Jobdetails />} />
              <Route path='/formpage/:id' element={<Formpage />} />                  
              <Route path='/webdev' element={<Webdevelopment />} />    
              <Route path='/mobiledev' element={<Mobiledevelopment />} />    
              <Route path='/contactpage' element={<Contactpage />} />    
              <Route path='/uiux' element={<Uiuxdevelopment />} />                                
              <Route path='/thankyou' element={<Thankyou />} />                                

              
          </Routes>
    </>
  )
}

export default App
