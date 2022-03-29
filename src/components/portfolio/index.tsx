import { FC } from 'react';

const Portfolio: FC = () => (
  <section className="flex flex-row h-screen">
    <div className="basis-3/5 p-10 pl-28 self-center">
      <h1 className="text-6xl mb-5 font-black">Portfolio</h1>
      <p className="info">Pratech</p>
      <p className="info">Isobar</p>
      <p className="info">Net Consult</p>
      <p className="info">Globant</p>
      <p className="info">Perficient</p>
    </div>
  </section>
);

export default Portfolio;
