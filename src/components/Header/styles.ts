import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  nav {
    display: flex;
    gap: 0.75rem; 
  }
`;

interface LinkButtonProps {
  variant: "purple" | "yellow";
}

export const LinkButton = styled.a<LinkButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes['text-s']};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${variant === 'purple' ?
      theme.colors[variant] : theme.colors[`${variant}-dark`]};
  `}


`
