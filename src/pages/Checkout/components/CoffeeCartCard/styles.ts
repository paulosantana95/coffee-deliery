import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

> div {
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

}

> p {
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  align-self: flex-start;
}
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  height: 100%;
  
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["base-button"]};

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
