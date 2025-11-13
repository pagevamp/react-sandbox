import Button from "../Button/Button";
import styles from "./style.module.css"
import { useCounter } from "../../hooks/useCounters";


const Counter = () => {
    const { count, increment, decrement } = useCounter();
    return (
        <section className={styles.background}>
            <p className={styles.count}>COUNT: {count}</p>
            <div className={styles.buttonSection}>
                <Button className={styles.increment } value="Increment" onClick={increment}></Button>
                <Button className={styles.decrement} value="Decrement" onClick={decrement}></Button>
            </div>
        </section>
    )
}

export default Counter
