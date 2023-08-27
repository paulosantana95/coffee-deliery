import styled from 'styled-components';
import IntroBackground from '../../../../assets/intro-background.svg';

export const IntroContainer = styled.section`
  padding-top: 4.125rem;
  padding-bottom: 4.125rem;
  margin-bottom: 2rem;
  background: ${() => `url(${IntroBackground}) no-repeat center`};
  background-size: cover;
`;

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 3.5rem;
`;

export const IntroContainerTitle = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 800;
    line-height: 130%;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes['text-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  `;



export const IntroContainerItems = styled.div`
  padding-top: 4.4688rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    
    p {
      font-family: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: ${({ theme }) => theme.fontSizes['text-m']};
      font-weight: 400;
      line-height: 130%;
    }
  }
  `;

interface SpanVariantProps {
  variant: 'yellow-dark' | 'yellow' | 'purple-dark' | 'purple' | 'base-text';
}

export const SpanItems = styled.span<SpanVariantProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) => theme.colors[`${variant}`]}
`;

export const IntroBannerImage = styled.div`
  padding-top: 5.75rem;
`