import { ContentContainer, PaymentMethodInputContainer } from "./style";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: ReactNode;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  );
});
