import { CheckoutOrderForm } from "./components/CheckoutOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe um CEP").max(8, "Informe um CEP"),
  street: zod.string().min(1, "Informe um endereço").max(25),
  number: zod.string().min(1, "Informe um número").max(25),
  complement: zod.string(),
  district: zod.string().min(1, "Informe um bairro").max(25),
  city: zod.string().min(1, "Informe uma cidade").max(25),
  uf: zod.string().min(1, "Informe um estado").max(25),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: "Selecione um método de pagamento",
      };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const { clearCart } = useCart();
  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
    clearCart();
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
