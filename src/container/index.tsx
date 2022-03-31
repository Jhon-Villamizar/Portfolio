import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Example from '../components/proyects';
import useCounter from '../db/useCounter';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Skills from '../pages/skills';
import Work from '../pages/work';

const Layout: FC = () => {
  const { state } = useCounter();

  return (
    <div className="h-screen">
      <div
        className={
          state.menu
            ? 'w-full overflow-y-auto'
            : 'w-full overflow-y-auto'
}
      >
        <Example />
        <div className={state.menu ? 'ml-52' : ''}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
