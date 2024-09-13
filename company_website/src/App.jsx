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

function App() {

  return (
      <>
          
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<Aboutpage /> } />
          </Routes>
    </>
  )
}

export default App
