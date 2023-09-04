import styled from "styled-components";
import { VariantType } from ".";


export const InfoWithIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

export interface SpanVariantProps {
  variant: VariantType;
}

export const InfoWithIconsSpan = styled.span<SpanVariantProps>`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, variant }) => theme.colors[`${variant}`]}
`;