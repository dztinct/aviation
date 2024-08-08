import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
        </Router>
        <Footer/>
        </div>
  )
}

export default App
