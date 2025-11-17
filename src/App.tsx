import Counter from "./components/Counter/Counter";
import UserForm from "./components/Form/UserForm/UserForm";
import { AddItem } from './components/Item/AddItem/AddItem';
import { useItems } from "./hooks/useItems";
import Button from "./components/Button/Button";
import { ItemList } from "./components/Item/ItemList/ItemList";

export default function App() {
 const { items, isVisible, inputValue, setInputValue,setSelectedItem, addItem, toggleVisibility } = useItems();
  return (
    <div>
    <div>
      <Counter />
    <UserForm/>
      <div className="items">
        <Button className="toggle-visible-btn" value={isVisible ? "Hide" : "Show"} onClick={toggleVisibility}></Button>
        {isVisible && (
          <>
            <AddItem addItem={addItem} inputValue={inputValue} setInputValue={setInputValue} />
            <ItemList items={items} setSelectedItem={setSelectedItem}/>
          </>
        )}
      </div>
    </div>
    </div>
  );
}