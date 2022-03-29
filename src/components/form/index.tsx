import { FC } from 'react';

const Form: FC = () => (
  <section className="flex flex-row h-screen">
    <div className="basis-3/5 p-10 pl-28 self-center">
      <h1 className="text-6xl mb-5 font-black">Contact Me!</h1>
      <p>
        I&apos;m interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question,
        don&apos;t hesitate to use the form.
      </p>
      <form className="flex flex-wrap w-100">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Message"
        />
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
            mt-1
            font-semibold
            hover:bg-primaryBold
            hover:text-[#000]
            hover:font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Form;
