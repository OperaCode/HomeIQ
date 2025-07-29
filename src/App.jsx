import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
