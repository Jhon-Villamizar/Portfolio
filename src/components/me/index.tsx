import { FC } from 'react';
import Example from '../proyects';

const Me: FC = () => (
  <section className="flex flex-row h-screen">
    <div className="basis-3/5 p-10 pl-28 self-center">
      <h1 className="text-6xl mb-5 font-black">About Me!</h1>
      <p className="info">
        I&apos;m a Full Stack Developer located in Colombia,and I&apos;m the
        best representation of commitment and effort. With 4 years of experience
        creating different web applications such as UI (user interfaces), Rest
        Services mainly with non-relational databases and integrations between
        different types of applications and components.
      </p>
      <p className="info">
        One of the main characteristics is never stop improve and learning new
        ways to create products and services.
      </p>
      <p className="info">
        On the other hand, I love sports, music, video games and craft beer,
        it&apos;s always nice to be able to spend some time chatting while
        drinking beer and talking to people you love.
      </p>
    </div>
    <div className="basis-2/5 p-10 pl-28 self-center">
      <Example />
    </div>
  </section>
);

export default Me;
