import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkIcon } from "./../SVG/DarkIcon";
import { LightIcon } from "./../SVG/LightIcon";

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container m-auto sticky top-0 z-50">
      {/* <button
        className="rounded-md absolute top-2 right-0 p-2 hover:ring-2 dark:hover:ring-secondary-light-300 hover:ring-primary-dark-300 flex items-center justify-center "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >*/}
      <button
        aria-label="theme-toggler"
        className="rounded absolute transition top-2 right-0 p-[5px] ring-1 hover:ring-1 dark:bg-primary-dark-300 bg-secondary-light-500
        ring-secondary-light-icon-bg hover:ring-secondary-light-icon 
        text-secondary-light-text-500 dark:text-primary-dark-text-500
         dark:ring-primary-dark-icon-bg dark:hover:ring-primary-dark-icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "dark" ? <LightIcon /> : <DarkIcon />}
      </button>
    </div>
  );
};
