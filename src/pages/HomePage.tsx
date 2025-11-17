import ThemeToggle from "../features/ThemeToggle/ThemeToggle"
import useDarkMode from "../hooks/useDarkMode"

const HomePage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  )
}

export default HomePage
