import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = () => {
        if (!ref.current) {
          return;
        }

        handler();
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler],
  );
}

export default useOnClickOutside;
