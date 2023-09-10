import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;

interface InputStyleContainerProps {
  $hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors["base-input"]};
  transition: 0.2s;
  overflow: hidden;
  
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors["base-error"] : theme.colors["base-button"])};
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none !important;

  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  padding: 0.75rem;

  &::placeholder {
    outline: none;
    color: ${({ theme }) => theme.colors["base-label"]};
  }

  &:focus {
    outline: none;
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  margin-right: 0.75rem;
  color: ${({ theme }) => theme.colors["base-label"]};
`;