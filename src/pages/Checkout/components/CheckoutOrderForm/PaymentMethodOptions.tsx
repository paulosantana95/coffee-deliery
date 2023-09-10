import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          label={label}
          icon={icon}
          value={key}
          {...register("paymentMethod", { required: true })}
        />
      ))}
      {paymentMethodError && (
        <RegularText size="xs">{paymentMethodError}</RegularText>
      )}
    </PaymentMethodOptionsContainer>
  );
}
