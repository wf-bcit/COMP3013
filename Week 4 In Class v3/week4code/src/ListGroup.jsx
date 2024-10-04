import { useState } from "react";
import { ListGroupHeader } from "./Header";
import { ListGroupCities } from "./Cities";

export function ListGroup() {
    const cities = ["New York", "Paris", "Tokyo", "London"];
    let chosenCity = 0;
    const [chosenCityIndex, setChosenCityIndex] = useState(-1);
    return (
      <>
      <ListGroupHeader cities={cities} chosenCityIndex={chosenCityIndex} />
      <ListGroupCities cities={cities} chosenCityIndex={chosenCityIndex} setChosenCityIndex={setChosenCityIndex} />
      </>
    );
  }