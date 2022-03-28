import { FC } from 'react';
import { Link } from 'react-router-dom';
import art from '../../assets/img/midArt.png';

const Header: FC = () => (
  <header className="flex flex-row h-screen">
    <div className="basis-4/5 p-10 pl-28 self-center">
      <h1>
        Hi!
        <br />
        I&apos;m Jhon,
        <br />
        Software Developer,
      </h1>
      <p>Full Stack Developer and Javascript specialist</p>
      <Link to="contact">
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
          Contact me!
        </button>
      </Link>
    </div>
    <div className="basis-1/5">
      <div className="h-full flex justify-end items-center">
        <img src={art} alt="face" className="w-44 z-0 grayscale blur-sm" />
      </div>
    </div>
  </header>
);

export default Header;
