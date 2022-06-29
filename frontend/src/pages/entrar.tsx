import { NextPage } from 'next'
import { useState } from 'react'

const Entrar: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('submited')
  }

  return (
    <>
      <div className="min-h-screen bg-orange-200 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
          <div className="relative p-8 bg-cyan-300 shadow-sm sm:rounded-xl">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5 relative">
                <input
                  type="email"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Email address
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  type="password"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Password
                </label>
              </div>
              <button
                type="submit"
                disabled={!validateForm()}
                className="w-full bg-orange-400 text-white p-3 rounded-md disabled:bg-cyan-100 disabled:text-slate-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Entrar
