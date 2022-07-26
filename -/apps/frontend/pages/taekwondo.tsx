import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Taekwondo: NextPage = () => {
  const locations = [{ name: 'Home', goesTo: '/' }];
  return (
    <>
      <Navbar locations={locations} />
      <h1 className="text-3xl font-bold underline">Taekwondo!</h1>
    </>
  );
};

export default Taekwondo;
