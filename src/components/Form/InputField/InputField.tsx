import type React from "react";
import styles from "./style.module.css";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, value, onChange }: InputFieldProps) => {
  return (
    <div className={styles["input-field"]}>
      <label className={styles["input-field__label"]}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label}`}
        className={styles["input-field__input"]}
      />
    </div>
  );
};

export default InputField;
