import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Personal: NextPage = () => {
  const locations = [{ name: 'Home', goesTo: '/' }];
  return (
    <>
      <Navbar locations={locations} />
      <h1 className="text-3xl font-bold underline">Treino de Personal!</h1>
    </>
  );
};

export default Personal;
