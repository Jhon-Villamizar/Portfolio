import { useContext, useEffect, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
// eslint-disable-next-line import/extensions
import { MenuToggle } from './menuToggle';
import { Navigation } from './navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Example = (ref: any) => {
  const [state, dispatch] = useContext(dbContext);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    console.log('====================================');
    console.log(containerRef);
    console.log('====================================');
  });

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="example"
    >
      <motion.div
        className="background w-1/2 xl:w-2/12 lg:w-2/12 md:w-1/4 sm:w-1/3"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Example;
