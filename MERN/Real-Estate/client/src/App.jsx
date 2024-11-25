import { useState } from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AllDoctors from './pages/AllDoctors'
import About from './pages/About'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'

function App() {

  const routes = (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/signUp' exact element={<SignUp/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/all-doctors' exact element={<AllDoctors/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/profile' exact element={<Profile/>}/>
      <Route path='/appointment' exact element={<Appointment/>} />
    </Routes>
  )
  return (
    <>
      <Router>
        <Navbar/>
        <div>{routes}</div>
      </Router>
    </>
  )
}

export default App
