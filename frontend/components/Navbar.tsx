import { FunctionComponent } from 'react'

type Props = {}

const Navbar: FunctionComponent<Props> = () => {
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
          </div>
          <div className={'lg:flex flex-grow items-center'}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  <span className="ml-2">Sobre</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#staff"
                >
                  <span className="ml-2">Equipe</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#classes"
                >
                  <span className="ml-2">Aulas</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/personal"
                >
                  <span className="ml-2">Login/Cadastro</span>
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
