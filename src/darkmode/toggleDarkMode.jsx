import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.toggle("dark");
    } else {
      document.documentElement.classList.toggle("light");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-2xl shadow-md bg-gray-200 dark:bg-gray-800 transition"
      >
        {isDarkMode ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon className="text-gray-700" />
        )}
      </button>
    </>
  );
};
