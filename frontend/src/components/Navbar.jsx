import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-center space-x-8 py-4">
        <NavLink to='/'  className="hover:text-blue-400 transition">
            All Contacts
        </NavLink>
        <NavLink to='/createNew'  className="hover:text-blue-400 transition">
             Create Contact
        </NavLink>
        <NavLink to="/userProfile"  className="hover:text-blue-400 transition">
          User Profile
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
