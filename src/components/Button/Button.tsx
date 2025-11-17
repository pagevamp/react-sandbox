import React from "react"

interface ButtonInterface {
  content: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ content, className, onClick }: ButtonInterface) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  )
}

export default Button
