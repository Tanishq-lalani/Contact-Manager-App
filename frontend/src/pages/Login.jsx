import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form className="space-y-6">
          {/* ✅ Inline text + link */}
          <div className="flex justify-center space-x-2 text-sm text-gray-600">
            <span>Not logged In?</span>
            <button
              onClick={() => {
                navigate("/register")
              }}
              type="button"
              className="text-blue-500 hover:underline font-medium"
            >
              Register here
            </button>
          </div>

          <input
            type="email"
            placeholder="Please Enter Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Please Enter Your Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}


export default Login
