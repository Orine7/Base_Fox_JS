import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'

const Students: NextPage = () => {
  const locations = [{ name: 'Home', goesTo: '/' }]
  return (
    <>
      <Navbar locations={locations} />
      <h1 className="text-3xl font-bold underline">Alunos!</h1>
    </>
  )
}

export default Students
