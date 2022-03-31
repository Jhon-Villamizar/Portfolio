// eslint-disable-next-line object-curly-newline
import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
