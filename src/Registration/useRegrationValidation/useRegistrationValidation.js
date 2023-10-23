import { useEffect, useState } from "react";

export default function useRegistrationValidation() {
  const [name, setName] = useState("");
  const [allErrors, setErrors] = useState({});

  useEffect(() => {
    onNameChange("");
  }, []);

  function onNameChange(name) {
    setName(name);
    if (name.length == 0) {
      setErrors({
        name: "Please Enter Username",
      });
    } else {
      setErrors({});
    }
  }

  return {
    name,
    allErrors,
    onNameChange,
  };
}
