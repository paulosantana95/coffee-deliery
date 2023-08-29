import { OurCoffees } from "./components/OurCoffees";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
}
