import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'

const Coachs: NextPage = () => {
  const locations = [{ name: 'Home', goesTo: '/' }]
  return (
    <>
      <Navbar locations={locations} />
      <h1 className="text-3xl font-bold underline">Instrutores!</h1>
    </>
  )
}

export default Coachs
