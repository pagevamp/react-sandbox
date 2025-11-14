import { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter/Counter";
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    document.title = `Hello ${name}`;
  }, [name]);

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
    }
  }, [selectedItem]);


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <p>Name: {name}</p>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <p>Email: {email}</p>
        </div>
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
        <ThemeToggle/>
      </div>
    </div>
  );
}