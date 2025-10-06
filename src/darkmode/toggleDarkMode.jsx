import { Sun, Moon } from 'lucide-react';
import useDarkMode from './darkModeHook';

export const ToggleDarkMode = () => {
  const [theme, ToggleTheme] = useDarkMode();

  return (
    <>
      <button
        onClick={ToggleTheme}
        className="p-2 rounded-2xl shadow-md bg-gray-200 dark:bg-gray-800 transition"
      >
        {theme === 'light' ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon color="white" className="text-gray-700" />
        )}
      </button>
    </>
  );
};
