import { useCallback, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  const decrement = useCallback(
    () => setCount((count) => Math.max(count - 1, 0)),
    []
  );
  return { count, increment, decrement };
}
