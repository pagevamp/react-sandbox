import React from "react"

interface ButtonInterface {
  content: string
  className?: string
  type?: "submit" | "reset" | "button" | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const 
Button = ({ content, className, type, onClick }: ButtonInterface) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {content}
    </button>
  )
}

export default Button
