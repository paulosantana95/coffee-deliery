import styled from "styled-components";

export const PaymentMethodInputContainer = styled.div`
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
  user-select: none;

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
`;