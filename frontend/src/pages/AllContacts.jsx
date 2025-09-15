import React from 'react'
import axiosInstance from '../axiosInstance'
import { useEffect } from 'react'

const AllContacts = () => {
    const allContactList = async ()=>{
        const res = await axiosInstance.get("/contact/")
        console.log(res)
    }
   
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default AllContacts
