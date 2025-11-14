import { useCallback, useEffect, useState } from "react"

export default function useCount() {
  const [count, setCount] = useState(0)

  const onIncrement = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const onDecrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  useEffect(() => {
    localStorage.setItem("count", count.toString())
  }, [count])

  useEffect(() => {
    const storedCount = localStorage.getItem("count")
    if (storedCount) {
      setCount(parseInt(storedCount))
    }
  }, [])

  return { count, onIncrement, onDecrement }
}
