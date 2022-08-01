import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Entrar: NextPage = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const [password, setPassword] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const res = await fetch('http://localhost:3333/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode != 401) {
          router.push('aluno')
        }
      })
      .catch((rejected) => {
        throw new Error('Ocorreu um erro na autenticação')
      })
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
                  name="email"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Endereço de Email
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  type="password"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Senha
                </label>
              </div>

              <button
                type="submit"
                disabled={!validateForm()}
                className="w-full bg-orange-400 text-white p-3 rounded-md disabled:bg-cyan-100 disabled:text-slate-400"
              >
                Login
              </button>
            </form>
            <div className="mt-5 relative text-center">
              <a href="/cadastro">Não possui cadastro?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Entrar
