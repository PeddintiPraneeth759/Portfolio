import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = React.useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => toggleDarkMode(!darkSide)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors duration-300 focus:outline-none shadow-md"
      aria-label="Toggle Dark Mode"
    >
      {darkSide ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
