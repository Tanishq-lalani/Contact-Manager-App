import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import AllContacts from './pages/AllContacts'
import { useAuth } from './context/AuthContext'



function App() {
  const [count, setCount] = useState(0)
  const token = localStorage.getItem("token")
  return (
    <>
       {!token ? (
       <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="*" element={<Login/>}/>
          </Routes>
        ) : 
      (
        <>
        <Navbar/>

        <Routes>
            <Route path='/' element={<AllContacts/>}/>
            <Route path='/createNew' element={<Contact/>}/>
            <Route path='/userProfile' element={<Profile/>}/>
        </Routes>

        <Footer/>
        </>
      )}
         
    </>
  )
}

export default App
