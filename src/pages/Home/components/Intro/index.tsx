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

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <IntroContainerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IntroContainerItems>
            <div>
              <SpanItems variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </SpanItems>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <SpanItems variant="base-text">
                <Package size={16} weight="fill" />
              </SpanItems>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <SpanItems variant="yellow">
                <Timer size={16} weight="fill" />
              </SpanItems>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <SpanItems variant="purple">
                <Coffee size={16} weight="fill" />
              </SpanItems>
              <p>Compra simples e segura</p>
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
