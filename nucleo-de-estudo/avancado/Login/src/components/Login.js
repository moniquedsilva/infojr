import React, { useState } from 'react'

function Login(props) {
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleSignUp, 
    handleSignIn,  
    emailError, 
    passwordError 
  } = props

  const [title, setTitle] = useState(false)
  const [account, setAccount] = useState(false)

  const handleAccount = () => {
    setAccount(!account) 
    setTitle(!title)
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-md shadow-md rounded bg-white">
        {title ? (
          <h3 className="mt-8 text-green-900 text-3xl font-sans font-semibold 
        tracking-wider uppercase text-center">
          Sign In
        </h3>
        ) : (
          <h3 className="mt-8 text-green-900 text-3xl font-sans font-semibold 
        tracking-wider uppercase text-center">
          Sign Up
        </h3>
        )}
        <form action="" className="px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label 
              htmlFor="email" 
              className="text-sm block font-semibold  pb-2">
                Enter your e-mail
            </label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline bborder-gray-300" 
              placeholder="example@example.com" 
            />
            <p className="text-red-500 text-center"> {emailError} </p>
          </div>
          <div className="px-4 pb-4">
            <label 
              htmlFor="password" 
              className="text-sm block font-semibold pb-2">
                Password
            </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline bborder-gray-300" 
              placeholder="Enter your password" 
            />
          <p className="text-red-500 text-center"> {passwordError} </p>
          </div>
          <div className="px-4 pb-4">
            {account ? (
              <>
                <button 
                  onClick={handleSignIn}
                  className="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white 
                  font-bold rounded focus:outline-none focus:shadow-outline" 
                  type="button">
                    Sign In
                </button>
                <p className="mt-1 text-right">Don't have an account? <span className="text-green-500 cursor-pointer" onClick={handleAccount}> Sign Up </span></p>
              </>
            ) : (
              <>
                <button 
                  onClick={handleSignUp}
                  className="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white 
                  font-bold rounded focus:outline-none focus:shadow-outline" 
                  type="button">
                    Sign Up
                </button>
                <p className="mt-1 text-right"> Have an account? <span className="text-green-500 cursor-pointer" onClick={handleAccount}> Sign In </span></p>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
