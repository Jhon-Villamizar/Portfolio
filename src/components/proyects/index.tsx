import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

// eslint-disable-next-line import/export
const Proyects: FC = () => {
  const [isOn, setIsOn] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className="handleSwitch"
      data-isOn={isOn}
      onClick={toggleSwitch}
      aria-hidden="true"
    >
      <motion.div
        className="
          w-3.5
          h-3.5
          bg-[#fff]
          rounded-full"
        layout
        transition={spring}
      />
    </div>
  );
};

export default Proyects;
