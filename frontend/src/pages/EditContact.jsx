import React, { useEffect , useState} from 'react'
import axiosInstance from '../axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'

const EditContact = () => {
    const [data,setData] = useState({
        name: "",
        email: "",
        phoneNo: ""
    })
    const { id } = useParams()
    const navigate = useNavigate()
    const showToast = ()=>{
        toast.success("User Updated")
    }
    // Getting the data of the selected contact to show on form
    const getContact = async ()=>{
        const res = await axiosInstance.get(`/contact/${id}`)
        setData(res.data)
    }
    
    // handlechange
    const handlechange = (e)=>{
        const {name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // Submit Handler
    const submitHandler = async(e)=>{
        e.preventDefault()
        const res = await axiosInstance.put(`/contact/${id}`,
            data
        )
        showToast()
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }

    useEffect(()=>{
       getContact()
    },[id])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <form className="space-y-4" onSubmit={submitHandler} action="">
            <input  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" name='name' onChange={handlechange} value={data.name} />
            <input  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" name='email' onChange={handlechange} value={data.email} />
            <input  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" name='phoneNo' onChange={handlechange} value={data.phoneNo} />
            <button className="w-full py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition" type='submit'>Edit Changes</button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default EditContact
