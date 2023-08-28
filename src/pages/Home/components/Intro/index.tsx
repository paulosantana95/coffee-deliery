import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introImage from "../../../../assets/banner-image.svg";
import {
  IntroBannerImage,
  IntroContainer,
  IntroContainerItems,
  IntroContainerTitle,
  IntroContent,
  SpanItems,
} from "./styles";
import { RegularText, TitleTextProps } from "../../../../components/Typography";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <IntroContainerTitle>
          <TitleTextProps size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </TitleTextProps>
          <RegularText size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
          <IntroContainerItems>
            <div>
              <SpanItems variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </SpanItems>
              <RegularText>Compra simples e segura</RegularText>
            </div>
            <div>
              <SpanItems variant="base-text">
                <Package size={16} weight="fill" />
              </SpanItems>
              <RegularText>Compra simples e segura</RegularText>
            </div>
            <div>
              <SpanItems variant="yellow">
                <Timer size={16} weight="fill" />
              </SpanItems>
              <RegularText>Compra simples e segura</RegularText>
            </div>
            <div>
              <SpanItems variant="purple">
                <Coffee size={16} weight="fill" />
              </SpanItems>
              <RegularText>Compra simples e segura</RegularText>
            </div>
          </IntroContainerItems>
        </IntroContainerTitle>
        <IntroBannerImage>
          <img src={introImage} alt="" />
        </IntroBannerImage>
      </IntroContent>
    </IntroContainer>
  );
}
