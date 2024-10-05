import { useState } from "react";
import { ListGroupHeader } from "./Header";
import { ListGroupCities } from "./Cities";

export function ListGroup() {
    const cities = ["New York", "Paris", "Tokyo", "London"];
    const [selectedCityIndex, setSelectedCityIndex] = useState();

    return (
      <>
      <ListGroupHeader city={cities[selectedCityIndex]} />
      <ListGroupCities cities={cities} selectedCityIndex={selectedCityIndex} setSelectedCityIndex={setSelectedCityIndex} />
      </>
    );
  }