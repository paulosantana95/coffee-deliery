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

export const LinkButton = styled.button<LinkButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes['text-s']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

  }

  ${({ theme, variant }) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${variant === 'purple' ?
      theme.colors[variant] : theme.colors[`${variant}-dark`]};

    span {
      background: ${theme.colors[`${variant}-dark`]};
    }
  `}

`
