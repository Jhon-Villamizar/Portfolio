import { FC } from 'react';
import { motion } from 'framer-motion';
import Layout from './container';
import luna from './assets/img/luna.png';
import sol from './assets/img/sol.png';
import useCounter from './hooks/useCounter';

const App: FC = () => {
  const { state, dispatch } = useCounter();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={
          state.theme
            ? 'theme-light h-screen bg-primaryBg text-primary app'
            : 'theme-dark h-screen bg-primaryBg text-primary app'
        }
    >
      <div className="relative">
        <div
          className="
            fixed
            top-3
            right-5
            w-12"
        >
          <div
            className="handleSwitch"
            data-isOn={state.theme}
            onClick={() => {
              dispatch('theme');
            }}
            aria-hidden="true"
          >
            <motion.div
              className="
                w-5
                h-5
                bg-[#fff]
                rounded-full"
              layout
              transition={spring}
            >
              {!state.theme ? (
                <img src={luna} alt="" className="w-full" />
              ) : (
                <img src={sol} alt="" className="w-full" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Layout />
    </div>
  );
};

export default App;
