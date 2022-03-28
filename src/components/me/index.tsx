import { FC } from 'react';
import { Link } from 'react-router-dom';

const Me: FC = () => (
  <section className="flex flex-col py-10 px-28">
    <div>
      <h1 className="text-6xl mb-5 font-black">About</h1>
      <p className="text-justify">
        Jhon is the best representation of commitment and effort. With 4 years
        of experience creating different web applications such as UI (user
        interfaces), Rest Services mainly with non-relational databases and
        integrations between different types of applications and components. One
        of the main characteristics is never stop improve and learning new ways
        to create products and services.
      </p>
    </div>
    <div className="ml-auto w-fit">
      <Link to="/about">
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
          More About Me!
        </button>
      </Link>
    </div>
  </section>
);

export default Me;
