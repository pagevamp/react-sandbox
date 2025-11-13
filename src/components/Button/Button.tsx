import type React from "react";

interface ButtonProps {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?:string
}

const Button = ({ value, onClick, className }: ButtonProps) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;   