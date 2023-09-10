import { RegularText, TitleText } from "../../components/Typography";
import { CheckoutDetailsContainer, SuccessCheckoutContainer } from "./styled";
import illustration from "../../assets/Illustration.svg";
import { InfoWithIcons } from "../../components/InfoWithIcons";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CheckoutOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function SuccessPage() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) {
    return <></>;
  }

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
                Entregar em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </CheckoutDetailsContainer>
        <img src={illustration} alt="" />
      </section>
    </SuccessCheckoutContainer>
  );
}
