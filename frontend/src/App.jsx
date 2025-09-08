import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const token = localStorage.getItem("token")

  return (
    <>
      <Routes>
       {!token ? (<>
          <Route path='/login' element={<Login/>}/>
       </>) : 
      (
        <>
         <Navbar/>
           
          
         <Footer/>
        </>
      )}

      </Routes>
    </>
  )
}

export default App
