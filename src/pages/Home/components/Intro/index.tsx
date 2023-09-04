import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introImage from "../../../../assets/banner-image.svg";
import {
  IntroBannerImage,
  IntroContainer,
  IntroContainerItems,
  IntroContainerTitle,
  IntroContent,
} from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { InfoWithIcons } from "../../../../components/InfoWithIcons";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <IntroContainerTitle>
          <TitleText size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
          <IntroContainerItems>
            <InfoWithIcons
              variant="yellow-dark"
              icon={<ShoppingCart size={16} weight="fill" />}
              info={<RegularText>Compra simples e segura</RegularText>}
            />
            <InfoWithIcons
              variant="base-text"
              icon={<Package size={16} weight="fill" />}
              info={<RegularText>Embalagem mantém o café intacto</RegularText>}
            />
            <InfoWithIcons
              variant="yellow"
              icon={<Timer size={16} weight="fill" />}
              info={<RegularText>Entrega rápida e rastreada</RegularText>}
            />
            <InfoWithIcons
              variant="purple"
              icon={<Coffee size={16} weight="fill" />}
              info={<RegularText>O café chega fresquinho até você</RegularText>}
            />
          </IntroContainerItems>
        </IntroContainerTitle>
        <IntroBannerImage>
          <img src={introImage} alt="" />
        </IntroBannerImage>
      </IntroContent>
    </IntroContainer>
  );
}
