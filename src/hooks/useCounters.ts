import { useCallback, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => setCount((count) => count + 1), []);
  const handleDecrement = useCallback(
    () => setCount((count) => Math.max(count - 1, 0)),
    []
  );
  return { count, handleIncrement, handleDecrement };
}
