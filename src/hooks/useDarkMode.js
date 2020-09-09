import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('darkmode');
  useEffect(() => {
    const body = window.document.body;
    if (value) {
      body.classlist.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [value]);
};
