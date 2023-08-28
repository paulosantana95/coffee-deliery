import { ShoppingCart } from "phosphor-react";
import { CoffeeCardContainer, TagListContainer, Tags } from "./styles";

export function CoffeeCard({ coffee }: any) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <h3>{coffee.name}</h3>
      <TagListContainer>
        <Tags>{coffee.type}</Tags>
        <Tags>{coffee.type}</Tags>
      </TagListContainer>
      <p>{coffee.description}</p>
      <div>
        <span>R$ {coffee.price}</span>
        <div>
          <input type="range" />
        </div>
        <button>
          <ShoppingCart size={24} />
        </button>
      </div>
    </CoffeeCardContainer>
  );
}
