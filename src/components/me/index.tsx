import { FC } from 'react';
import { Link } from 'react-router-dom';

const Me: FC = () => (
  <section className="flex flex-row">
    <div className="basis-3/5 p-10 pl-28 self-center">
      <h1 className="text-6xl mb-5 font-black">About Me!</h1>
      <p className="text-justify">
        I&apos;m a Full Stack Developer located in Colombia,and
        I&apos;m the best representation of commitment and effort. With 4 years
        of experience creating different web applications such as UI (user
        interfaces), Rest Services mainly with non-relational databases and
        integrations between different types of applications and components.
        <br />
        <br />
        One of the main characteristics is never stop improve and learning
        new ways to create products and services.
        On the other hand, I love sports, music, video games and craft beer,
        it&apos;s always nice to be able to spend some
        time chatting while drinking
        beer and talking to people you love.
      </p>
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
    </div>

  </section>
);

export default Me;
