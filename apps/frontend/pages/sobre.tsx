import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const About: NextPage = () => {
  const locations = [{ name: 'Home', goesTo: '/' }];
  return (
    <>
      <Navbar locations={locations} />
      <h1 className="text-3xl font-bold underline">Sobre!</h1>
    </>
  );
};

export default About;
