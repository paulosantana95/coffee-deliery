import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { coffees } from "../../../../data/coffees";
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffees[0].photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffees[0].name}</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9.90</p>
    </CoffeeCartCardContainer>
  );
}
