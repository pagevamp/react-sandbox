import Button from "../../Button/Button";
import styles from './style.module.css'
interface AddItemProps {
  addItem: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const AddItem = ({  addItem, inputValue, setInputValue }: AddItemProps) => (
  <div>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Add item" className={styles["add-item__input"]}/>
    <Button value="Add Item" onClick={addItem} className={styles["add-item__button"]}/>
  </div>
);