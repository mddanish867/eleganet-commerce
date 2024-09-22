import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
 const navigate = useNavigate();

 const handleResetLink= () => {
    navigate("/reset-password")
 }
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg" alt="Your Company" />
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Forgot Password</h2>
        <p>Enter your email address, we'll send you reset link to your email</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>                 

            <div>
              <button
              onClick={handleResetLink}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send reset link
              </button>
            </div>
          </form>          
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword