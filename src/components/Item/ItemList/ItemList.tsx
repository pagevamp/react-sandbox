import styles from './style.module.css'
interface ItemListProps {
  items: string[];
  setSelectedItem: (item: string) => void;
}

export const ItemList = ({ items, setSelectedItem }: ItemListProps) => (
  <ul className={styles["item-list"]}>
    {items.map((item, index) => (
      <li key={index} className={styles["item-list__item"]} onClick={() => setSelectedItem(item)}>
        {item}
      </li>
    ))}
  </ul>
);