import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["purple-light"]};
      border-color: ${theme.colors.purple};

      &:hover {
        background: ${theme.colors["purple-light"]};
      }
    `};
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  cursor: pointer;
  
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
  
  transition: 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  user-select: none;
`;