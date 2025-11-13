import { useState } from "react";

const useFormFields = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return { name, setName, email, setEmail };
};

export default useFormFields;
