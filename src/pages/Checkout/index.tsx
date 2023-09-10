import { CheckoutOrderForm } from "./components/CheckoutOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe um CEP").max(8, "Informe um CEP"),
  street: zod.string().min(1, "Informe um endereço").max(25),
  number: zod.string().min(1, "Informe um número").max(25),
  complement: zod.string(),
  district: zod.string().min(1, "Informe um bairro").max(25),
  city: zod.string().min(1, "Informe uma cidade").max(25),
  uf: zod.string().min(1, "Informe um estado").max(25),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}>
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  );
}
