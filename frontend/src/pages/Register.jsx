import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const showToast = () => {
       toast.success("User Registered")
  }
  const handleRegister = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/user/register",{
      name,
      email,
      password
    })
    showToast()

    //Providing timeout so that user can see the toast 
    setTimeout(() => navigate("/login"), 2000) 
    } catch (error) {
      toast.error("User Already Registered Please Login")
      setTimeout(() => navigate("/login"), 2000) 
    }
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleRegister} className="space-y-6">
          {/* ✅ Inline text + link */}
          <div className="flex justify-center space-x-2 text-sm text-gray-600">
            <span>Already Register?</span>
            <button
              onClick={() => {
                navigate("/login")
              }}
              type="button"
              className="text-green-500 hover:underline font-medium"
            >
              Login here
            </button>
          </div>

          <input
            type="text"
            placeholder="Please Enter Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={name}
            onChange= {(e) =>{setName(e.target.value)}}
          />

          <input
            type="email"
            placeholder="Please Enter Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange= {(e) =>{setEmail(e.target.value)}}
          />

          <input
            type="password"
            placeholder="Please Enter Your Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange= {(e) =>{setPassword(e.target.value)}}
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            Register
          </button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  )
}


export default Register
