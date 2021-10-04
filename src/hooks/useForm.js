import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    cpf: 0,
    firstName: "",
    lastName: "",
    idType: "",
    protheusCode: "",
    email: "",
    password: 123456,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };

  return [{ values, loading }, handleChange, handleSubmit];
};

export default useForm;
