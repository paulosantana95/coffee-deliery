import { CreditCard } from "phosphor-react";
import { PaymentMethodInputContainer } from "./style";

export function PaymentMethodInput() {
  return (
    <PaymentMethodInputContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentMethodInputContainer>
  );
}
