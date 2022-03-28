import { FC } from 'react';
import { Link } from 'react-router-dom';
import pratech from '../../assets/img/pratech.png';
import isobar from '../../assets/img/isobar.png';
import globant from '../../assets/img/globantblack.png';
import perficient from '../../assets/img/perficientBlack.png';

const Companies: FC = () => (
  <section className="flex flex-col">
    <div className="pt-10 px-28">
      <h1 className="text-6xl mb-5 font-black">Worked for</h1>
    </div>
    <div className="flex py-10 px-28 h-32 items-center">
      <div className="w-1/4 mx-5">
        <a
          href="https://pratechgroup.com/"
          target="_blank"
          rel="noreferrer"
          className="w-1/4"
        >
          <img src={pratech} alt="pratech" className="h-16" />
        </a>
      </div>
      <div className="w-1/4 mx-5 -mt-2">
        <a href="https://isobar.com.co/" target="_blank" rel="noreferrer">
          <img src={isobar} alt="isobar" className="h-16" />
        </a>
      </div>
      <div className="w-1/4 mx-5">
        <a href="https://www.globant.com/" target="_blank" rel="noreferrer">
          <img src={globant} alt="globant" className="h-16" />
        </a>
      </div>
      <div className="w-1/4 mx-5">
        <a href="https://www.perficient.com/" target="_blank" rel="noreferrer">
          <img src={perficient} alt="perficient" className="h-16" />
        </a>
      </div>
    </div>
    <div className="pt-10 px-28 ml-auto w-fit">
      <Link to="/work">
        <button
          type="button"
          className="
            transition
            ease-in-out
            delay-150
            border
            border-primaryBold
            rounded-md
            py-2
            px-10
            mt-10
            font-semibold
            hover:-translate-y-1
            hover:scale-110
            hover:bg-primaryBold
            hover:text-[#000]
            hover:font-semibold"
        >
          More About Work!
        </button>
      </Link>
    </div>
  </section>
);
export default Companies;
