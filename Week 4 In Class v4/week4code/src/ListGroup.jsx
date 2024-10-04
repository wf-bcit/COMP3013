import { useState } from "react";
import { ListGroupHeader } from "./Header";
import { ListGroupCities } from "./Cities";

export function ListGroup() {
    const cities = ["New York", "Paris", "Tokyo", "London"];
    const [chosenCityIndex, setChosenCityIndex] = useState();

    return (
      <>
      <ListGroupHeader city={cities[chosenCityIndex]} />
      <ListGroupCities cities={cities} chosenCityIndex={chosenCityIndex} setChosenCityIndex={setChosenCityIndex} />
      </>
    );
  }