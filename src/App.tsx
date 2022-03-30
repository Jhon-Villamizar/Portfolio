import { createContext, FC, useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from './container';
import luna from './assets/img/luna.png';
import sol from './assets/img/sol.png';
import reducer from './db/reducer';
import initialState from './db/state';

const dbContext = createContext(['', false, false]);

const App: FC = () => {
  const value = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(false);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <dbContext.Provider value={value}>
      <div
        className={
          theme
            ? 'theme-light h-screen bg-primaryBg text-primary'
            : 'theme-dark h-screen bg-primaryBg text-primary'
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
              data-isOn={theme}
              onClick={() => {
                setTheme(!theme);
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
                {!theme ? (
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
    </dbContext.Provider>
  );
};

export default App;
