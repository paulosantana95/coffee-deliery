import { LinkButton, HeaderContainer } from "./styles";
import logoApp from "../../assets/logo-app.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
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
            <ShoppingCart size={22} weight="fill" />
          </LinkButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
