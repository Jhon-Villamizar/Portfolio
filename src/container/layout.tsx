import { FC, useState } from 'react';
import Home from '../components/home';
import Nav from '../components/nav';

const Layout: FC = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="flex flex-row h-full">
      {menu ? (
        <div className="relative">
          <button
            className="
            fixed
            top-3
            left-5
            right-0
            rounded-full
            w-6
            h-6
            flex
            items-center
            justify-center
            cursor-pointer"
            onClick={() => {
              setMenu(false);
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primaryBold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-1/2 xl:w-2/12 lg:w-2/12 md:w-1/4 sm:w-1/3">
          <div>
            <button
              className="float-right bg-primaryBold rounded-r-sm"
              type="button"
              onClick={() => {
                setMenu(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-primaryBg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <Nav />
        </div>
      )}

      <div
        className={
          menu ? 'w-full' : 'w-1/2 xl:w-10/12 lg:w-10/12 md:w-3/4 sm:w-2/3'
        }
      >
        <Home />
      </div>
    </div>
  );
};

export default Layout;
