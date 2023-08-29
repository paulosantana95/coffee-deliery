import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

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

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  
  span {
    padding: 4px 8px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 130%;
    font-size: 0.625rem;
    border-radius: 100px;
    
    background: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`
export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700"
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  color: "label",
  weight: "400"
})`
  text-align: center;
  margin-bottom: 2.0625rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.9375rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.1875rem;

    p {
      line-height: 0.75rem;
    }
  } 

`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    border: none;
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: .2s;

    &:hover {
      background: ${({ theme }) => theme.colors["purple"]};
    }
  }
`
