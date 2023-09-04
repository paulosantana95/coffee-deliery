import { RegularText, TitleText } from "../../components/Typography";
import { CheckoutDetailsContainer, SuccessCheckoutContainer } from "./styled";
import illustration from "../../assets/Illustration.svg";
import { InfoWithIcons } from "../../components/InfoWithIcons";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

export function SuccessPage() {
  return (
    <SuccessCheckoutContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <CheckoutDetailsContainer>
          <InfoWithIcons
            variant="purple"
            icon={<MapPin weight="fill" />}
            info={
              <RegularText color="subtitle">
                Entregar em <strong>Rua Tabajaras do Amor</strong>
                <br />
                Fortaleza - CE
              </RegularText>
            }
          />
          <InfoWithIcons
            variant="yellow"
            icon={<Clock weight="fill" />}
            info={
              <RegularText color="subtitle">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcons
            variant="yellow-dark"
            icon={<CurrencyDollar weight="fill" />}
            info={
              <RegularText color="subtitle">
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </CheckoutDetailsContainer>
        <img src={illustration} alt="" />
      </section>
    </SuccessCheckoutContainer>
  );
}
