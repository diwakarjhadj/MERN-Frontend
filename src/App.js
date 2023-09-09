import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import ErrorPage from './component/ErrorPage';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';
import { Route, Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
//This is Ending Line