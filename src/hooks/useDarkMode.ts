import { useEffect, useState } from "react";

export function useDarkMode() {
  const container = document.getElementsByClassName("container");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const elements = Array.from(container);
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    elements.forEach((element) => {
      element.classList.toggle("dark", isDarkMode);
    });
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
}
