import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

const coffeeList = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 6,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 8,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    price: 9.9,
    image:
      "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  );
}
