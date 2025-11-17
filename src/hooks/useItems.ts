import { useState, useEffect } from "react";

export function useItems() {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selectedItem) console.log(selectedItem);
  }, [selectedItem]);

  const addItem = () => {
    if (inputValue) {
      setItems((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return {
    items,
    selectedItem,
    isVisible,
    inputValue,
    setInputValue,
    setSelectedItem,
    addItem,
    toggleVisibility,
  };
}
