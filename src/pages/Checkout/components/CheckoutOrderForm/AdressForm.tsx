import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";

const addressFields = [
  { name: "cep", placeholder: "CEP", type: "number", className: "cep" },
  { name: "street", placeholder: "Rua", className: "street" },
  {
    name: "number",
    placeholder: "Número",
    type: "number",
    className: "number",
  },
  {
    name: "complement",
    placeholder: "Complemento",
    className: "complement",
    rightText: "Opcional",
  },
  { name: "district", placeholder: "Bairro" },
  { name: "city", placeholder: "Cidade" },
  { name: "uf", placeholder: "UF" },
];

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AdressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AdressFormContainer>
      {addressFields.map((field) => (
        <Input
          key={field.name}
          placeholder={field.placeholder}
          type={field.type}
          className={field.className}
          {...register(field.name, { required: true })}
          error={errors[field.name]?.message}
          rightText={field.rightText}
        />
      ))}
    </AdressFormContainer>
  );
}
