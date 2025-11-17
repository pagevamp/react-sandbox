import useCount from "../../hooks/useCount"
import styles from "./styles.module.css"
import Button from "../../components/Button/Button"
import Titles from "../../components/Titles/Titles"

const ItemCount = () => {
  const { count, onIncrement, onDecrement } = useCount()

  return (
    <>
      <Titles className={styles.count} content="COUNT : " />
      <Titles className={styles.title} content={count} />
      <Button
        onClick={onIncrement}
        className={styles.increment}
        content="Increment"
      />
      <Button
        onClick={onDecrement}
        className={styles.decrement}
        content="Decrement"
      />
    </>
  )
}

export default ItemCount
