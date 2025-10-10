import { Sun, Moon } from 'lucide-react';
import useDarkMode from './darkModeHook';
import { motion, AnimatePresence } from 'framer-motion';

export const ToggleDarkMode = () => {
  const [theme, ToggleTheme] = useDarkMode();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={ToggleTheme}
      className="relative flex items-center justify-center w-12 h-12 p-2 rounded-full shadow-md bg-gray-300 dark:bg-gray-800 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme === 'light' ? 'sun' : 'moon'}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          {theme === 'light' ? (
            <Sun className="text-yellow-500" size={24} />
          ) : (
            <Moon className="text-slate-100" size={24} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};
