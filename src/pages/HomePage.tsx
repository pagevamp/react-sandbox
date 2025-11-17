import ThemeToggle from "../features/ThemeToggle/ThemeToggle"
import useDarkMode from "../hooks/useDarkMode"
import UserInfo from "../features/UserInfo/UserInfo"
import ItemCount from "../features/ItemCount/itemCount"

const HomePage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <ItemCount />
      <UserInfo />
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  )
}
export default HomePage
