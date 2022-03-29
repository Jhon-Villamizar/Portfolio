import { FC } from 'react';
import pratech from '../../assets/img/pratech.png';
import isobar from '../../assets/img/isobar.png';
import globant from '../../assets/img/globantblack.png';
import perficient from '../../assets/img/perficientBlack.png';

const Experince: FC = () => (
  <section className="flex flex-row h-screen">
    <div className="basis-3/5 p-10 pl-28 self-center">
      <h1 className="text-6xl mb-5 font-black">Skills</h1>
      <p className="info">
        Since I started my journey as a software developer 4 years ago, I have
        done work for different agencies and software development companies, I
        have been a frontend, backend, full stack developer and have
        collaborated with talented people to create web products for both
        businesses and consumers.
      </p>
      <p className="info">
        `I create successful responsive websites that are fast and built with
        cutting edge technology, easy to use and built with best practices.
      </p>
      <p className="info">
        The main area of my expertise is frontend development, ReactJs, Angular,
        building small to medium web applications, features, SPA, PWA.
      </p>
      <p className="info">
        `I also have experience as a backend developer for creating API&apos;s
        and database integrations with popular frameworks with different
        languages like (Spring Boot, .Net, Flask, Django, NodeJs).
      </p>
    </div>
  </section>
);
export default Experince;
