import Button from "../Button/Button";
import { useDarkMode } from "../../hooks/useDarkMode";
import styles from './style.module.css'

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button className={styles["toggleBtn"]} value={isDarkMode ? "Light Mode" : "Dark Mode"} onClick={toggleDarkMode}/>
  );
};