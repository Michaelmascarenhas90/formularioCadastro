import * as yup from "yup";

const schemaValidate = () => {
  yup.object().shape({
    cpf: yup.number().required("Informe um CPF válido!"),
    firstName: yup.string().required("informe um nome!"),
    lastName: yup.string().required("informe um sobrenome!"),
    idType: yup.string().required("informe a função do colaborador!"),
    protheusCode: yup.number().required("Informe o codigo do protheus!"),
    email: yup.string().email().required("Informe um email válido!"),
    Password: yup.number().required(),
  });
};
export default schemaValidate;
