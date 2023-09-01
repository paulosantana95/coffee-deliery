import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "small" | "medium";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    width: 100%;
    display: flex;
    text-align: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }

  }
  ${({ size }) => size === "medium" && css`
    padding: 0.5rem;
  `};

  ${({ size }) => size === "small" && css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: 'button'
})`
  background: none;
  border: none;

  width: 0.875rem;
  height: 0.875rem;

  color: ${({ theme }) => theme.colors["purple"]};
  transition: .2s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }

`;