import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0)
  const token = localStorage.getItem("token")

  return (
    <>
    
       {!token ? (
       <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="*" element={<Login />}/>
          </Routes>
        ) : 
      (
        <>
        <Navbar/>
        <Routes>

        </Routes>

        <Footer/>
        </>
      )}
         
    </>
  )
}

export default App
