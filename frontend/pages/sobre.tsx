import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Sobre!</h1>
    </>
  )
}

export default About
