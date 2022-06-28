import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Home!</h1>
    </>
  )
}

export default Home
