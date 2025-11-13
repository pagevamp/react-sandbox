import type React from "react";

interface InputFieldProps {
  label: string;
  type:string;
  value:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const InputField = ({ label, type, value, onChange }: InputFieldProps) => {
  return (
    <div>
      <input type={type} value={value} onChange={onChange} placeholder={`Enter your ${label}`} />
      <p>{label}:{value}</p>
    </div>
  )
}

export default InputField
