import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  padding: 4px 8px;

  text-transform: uppercase;
  font-weight: 700;
  line-height: 130%;
  font-size: 0.625rem;

  border-radius: 100px;

  background: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};

`