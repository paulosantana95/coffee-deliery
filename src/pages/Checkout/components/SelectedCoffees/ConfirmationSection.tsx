import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="s">R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="s">R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total de itens
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 29,70
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  );
}