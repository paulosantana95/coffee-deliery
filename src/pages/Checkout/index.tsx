import { CheckoutOrderForm } from "./components/CheckoutOrderForm";
import { CheckoutOrderContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutOrderContainer className="container">
      <CheckoutOrderForm />
    </CheckoutOrderContainer>
  );
}
