import { LinkButton, HeaderContainer } from "./styles";
import logoApp from "../../assets/logo-app.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer className="container">
      <div>
        <NavLink to="/">
          <img src={logoApp} alt="Coffee Delivery Logo" />
        </NavLink>
      </div>

      <nav>
        <LinkButton variant="purple">
          <MapPin size={22} weight="fill" />
          Fortaleza, CE
        </LinkButton>
        <NavLink to="/checkout">
          <LinkButton variant="yellow">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </LinkButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
