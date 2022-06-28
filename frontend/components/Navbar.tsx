import { FunctionComponent, useState } from 'react'

type Props = {}

const Navbar: FunctionComponent<Props> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-6 bg-orange-fox-orange">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Base Fox Treinamentos
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/sobre"
                >
                  <span className="ml-2">Sobre</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/instrutores"
                >
                  <span className="ml-2">Instrutores</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/taekwondo"
                >
                  <span className="ml-2">Taekwondo</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/personal"
                >
                  <span className="ml-2">Personal</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
