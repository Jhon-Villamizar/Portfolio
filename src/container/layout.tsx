import { FC } from 'react';
import Home from '../components/home';
import Nav from '../components/nav';

const Layout: FC = () => (
  <div className="flex flex-row h-full">
    <div className="w-1/2 xl:w-2/12 lg:w-2/12 md:w-1/4 sm:w-1/3">
      <Nav />
    </div>
    <div className="w-1/2 xl:w-10/12 lg:w-10/12 md:w-3/4 sm:w-2/3">
      <Home />
    </div>
  </div>
);

export default Layout;
