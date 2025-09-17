import React, { useState } from 'react'
import axiosInstance from '../axiosInstance'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AllContacts = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const allContactList = async () => {
    const res = await axiosInstance.get("/contact/")
    setData(res.data)
  }
  const deleteContact = async (id) => {
    const res = await axiosInstance.delete(`/contact/${id}`)
    setData(data.filter(contact => contact._id !== id))
  }

  useEffect(() => {
    allContactList()
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center p-6'>
      <div className='w-full max-w-3xl space-y-4'>
        {
          data.map((item, index) => (
            <div onClick={() => navigate(`/contact/${item._id}`)} key={index}
              className='bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition'>
              <p className='text-lg font-semibold text-gray-800'>{item.name}</p>
              <p className='text-sm text-gray-600'>{item.email}</p>
              <p className='text-sm text-gray-600 mb-4'>{item.phoneNo}</p>
              <div className='flex gap-4'>
                <button onClick={(e) => { e.stopPropagation(); navigate(`/edit/${item._id}`)}} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>Edit</button>
                <button onClick={(e) => { e.stopPropagation(); deleteContact(item._id)}} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllContacts
