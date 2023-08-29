import styled from "styled-components";

export const QuantityInputContainer = styled.div`
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