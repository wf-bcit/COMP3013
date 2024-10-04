import { ListGroupHeader } from "./Header";
import { ListGroupCities } from "./Cities";

export function ListGroup() {
    const cities = ["New York", "Paris", "Tokyo", "London"];
    let chosenCity = 0;
    // const [chosenCity, setChosenCity] = useState(0);
    return (
      <>
      <ListGroupHeader city={cities[chosenCity]}/>
      <ListGroupCities cities={cities}/>
      </>
    );
  }