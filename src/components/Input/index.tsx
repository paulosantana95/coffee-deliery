import { InputHTMLAttributes, forwardRef } from "react";
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from "./styles";
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer $hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="xs">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
