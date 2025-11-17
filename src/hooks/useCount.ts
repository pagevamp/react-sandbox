import { useCallback, useEffect, useState } from "react"

export default function useCount() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count")
    if (storedCount) {
      return parseInt(storedCount)
    }
    return 0
  })

  const onIncrement = useCallback(() => {
    setCount(count! + 1)
  }, [count])

  const onDecrement = useCallback(() => {
    setCount((count) => Math.max(count! - 1, 0))
  }, [count])

  useEffect(() => {
    localStorage.setItem("count", count!.toString())
  }, [count])

  return { count, onIncrement, onDecrement }
}
