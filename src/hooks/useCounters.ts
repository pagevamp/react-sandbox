import { useCallback, useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const handleIncrement = useCallback(() => setCount((count) => count + 1), []);
  const handleDecrement = useCallback(
    () => setCount((count) => Math.max(count - 1, 0)),
    []
  );
  return { count, handleIncrement, handleDecrement };
}
