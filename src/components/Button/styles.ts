import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;
  line-height: 1.3rem;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes["button-g"]};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.yellow};
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;