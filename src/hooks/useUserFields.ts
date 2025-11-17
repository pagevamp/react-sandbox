import { useCallback, useState } from "react"

export default function useUserFields() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [hideItems, setHideItems] = useState(false)
  const [itemInput, setItemInput] = useState("")
  const [items, setItems] = useState<string[]>([])

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    },
    []
  )

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    []
  )

  function addItem() {
    if (itemInput.trim() !== "") {
      setItems((prev) => [...prev, itemInput])
      setItemInput("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItems = [itemInput.trim() && `${itemInput}`].filter(Boolean)

    setItems((prev) => [...prev, ...newItems])

    setName("")
    setEmail("")
    setItemInput("")
  }

  const handleHideItems = () => {
    setHideItems((prev) => !prev)
  }

  return {
    name,
    email,
    items,
    itemInput,
    hideItems,
    setItemInput,
    handleNameChange,
    handleEmailChange,
    handleHideItems,
    addItem,
    handleSubmit,
  }
}
