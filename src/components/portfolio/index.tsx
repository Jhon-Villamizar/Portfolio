import { FC } from 'react';

const Portfolio: FC = () => (
  <section className="flex flex-row h-screen">
    <div className="self-center">
      <h1 className="text-6xl mb-5 font-black">Portfolio</h1>
      <div className="h-64 w-64 bg-[#fff]">
        <p>algo</p>
      </div>
      <p className="info">Pratech</p>
      <p className="info">Isobar</p>
      <p className="info">Net Consult</p>
      <p className="info">Globant</p>
      <p className="info">Perficient</p>
    </div>
  </section>
);

export default Portfolio;
