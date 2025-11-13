import { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter/Counter";
import UserForm from "./components/Form/UserForm/UserForm";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
    }
  }, [selectedItem]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function addItem() {
    if (inputRef.current && inputRef.current.value) {
      setItems([...items, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  async function handleSubmit() {
    // Do something with data...
  }

  return (
    <div>
      <Counter/>

    <UserForm/>

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <button onClick={toggleVisibility}>
              {isVisible ? "Hide" : "Show"} Items
            </button>
            {isVisible && (
              <div>
                <input type="text" ref={inputRef} placeholder="Add item" />
                <button onClick={addItem}>Add Item</button>
                <ul>
                  {items.map((item, index) => (
                    <li key={index} onClick={() => setSelectedItem(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <p>Selected Item: {selectedItem}</p>
          </div>
        </div>
      </form>
      <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}