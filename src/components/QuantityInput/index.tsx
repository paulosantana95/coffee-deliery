import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "small" | "medium";
}

export function QuantityInput({ size = "medium" }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
