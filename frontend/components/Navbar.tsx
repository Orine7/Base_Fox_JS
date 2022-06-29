import { FunctionComponent } from 'react'

type Locations = {
  name: string
  goesTo: string
}
type Props = {
  locations: Locations[]
}

const Navbar: FunctionComponent<Props> = ({ locations }) => {
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
              {locations.map((x) => (
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                    href={x.goesTo}
                  >
                    <span className="ml-2">{x.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
