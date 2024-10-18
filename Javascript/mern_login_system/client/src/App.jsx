import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import UserProfile from './pages/UserProfile/UserProfile'
import { UserContextProvider } from '../context/userContext'

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  const routes = (
    <Router>
      <UserContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/profile' exact element={<UserProfile/>}/>
        </Routes>
      </UserContextProvider>
    </Router>
  )

  return (
    <>
      <Toaster position='bottom-center' toastOptions={{duration: 2000}}/>
      {routes}
    </>
  )
}

export default App
