import React from 'react'
import axiosInstance from '../axiosInstance'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { useEffect } from 'react'


const showToast = ()=>{
    toast.success("User Created")
}

const Contact = () => {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    console.log(token) 
    if(!token) return window.location.href="/login"
    const createContact = async(e)=>{
        e.preventDefault()
        try {
            const res = await axiosInstance.post('/contact/create',
            {name,
            email,
            phoneNo,},
            { headers: { Authorization: `Bearer ${token}` } }
        )
        console.log("Token sent:", token);
        showToast()
        setTimeout(() => {
            navigate('/')
        }, 2000);
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
    <form onSubmit={createContact} action="" className="space-y-4">
      <input
        type="text"
        placeholder="Please Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Please Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Please Enter Your Phone Number"
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
      >
        Create Contact
      </button>
    </form>
    <ToastContainer />
  </div>
</div>

  )
}

export default Contact
