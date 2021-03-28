import { useState } from 'react';

const isValidJson = (value: string) => {
  try {
    JSON.parse(value);
  } catch (__) {
    return false;
  }

  return true;
};

export default (key: string, initialValue: object | string | number) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item && isValidJson(item)) {
        return JSON.parse(item);
      } else {
        return item ? item : initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      // Same API ase useState above
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
