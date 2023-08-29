import { ShoppingCart } from "phosphor-react";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formatedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag, index) => (
          <span key={`${index}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>{" "}
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
