import Button from "../Button/Button";
import styles from "./style.module.css"
import { useCounter } from "../../hooks/useCounters";


const Counter = () => {
    const { count, handleIncrement, handleDecrement } = useCounter();
    return (
        <section className={styles.background}>
            <p className={styles.count}>COUNT: {count}</p>
            <div className={styles.buttonSection}>
                <Button className={styles.increment } value="Increment" onClick={handleIncrement}/>
                <Button className={styles.decrement} value="Decrement" onClick={handleDecrement}/>
            </div>
        </section>
    )
}

export default Counter