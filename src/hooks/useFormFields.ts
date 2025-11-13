import { useEffect, useState } from "react";

const useFormFields = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = name ? `Hello ${name}` : "React App";
  }, [name]);

  return { name, setName, email, setEmail };
};

export default useFormFields;
