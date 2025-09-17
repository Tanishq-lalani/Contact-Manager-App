import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInstance'
import { useParams } from 'react-router-dom'

const Contact_Profile = () => {
    const [data , setData] = useState(null)
    const { id } = useParams()
    const getUser = async()=>{
        const res = await axiosInstance.get(`/contact/${id}`)
        console.log(res.data)
        setData(res.data)
    }
    useEffect(()=>{
        getUser()
    },[id])
    if(!data){
        return (
            <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <p className='text-gray-600 text-lg'>Loading.....</p>
        </div>)
    }
  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.name}</h2>
        <p className="text-gray-600 mb-2">{data.email}</p>
        <p className="text-gray-600 mb-6">{data.phoneNo}</p>

        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Edit
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact_Profile
