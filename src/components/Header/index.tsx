import { LinkButton, HeaderContainer } from "./styles";
import logoApp from "../../assets/logo-app.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <img src={logoApp} alt="Coffee Delivery Logo" />
      </NavLink>

      <nav>
        <LinkButton variant="purple" href="">
          <MapPin size={22} weight="fill" />
          Fortaleza, CE
        </LinkButton>
        <LinkButton variant="yellow" href="">
          <ShoppingCart size={22} weight="fill" />
        </LinkButton>
      </nav>
    </HeaderContainer>
  );
}
