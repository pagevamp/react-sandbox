import Button from "../../components/Button/Button"
import styles from "./style.module.css"

interface ThemeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeToggle = ({ isDarkMode, toggleDarkMode }: ThemeToggleProps) => {
  return (
    <Button
      className={styles.switch}
      content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      onClick={toggleDarkMode}
    />
  )
}

export default ThemeToggle
