import { useState } from "react";

export function ListGroupCities({cities, chosenCityIndex, setChosenCityIndex}) {

    return (
      <>     
        <ul className="list-group">
          {cities.map((city, index) => (
            <GroupCity city={city} index={index} chosenCityIndex={chosenCityIndex} setChosenCityIndex={setChosenCityIndex} />
          ))}
        </ul>
      </>
    );
  }

export function GroupCity({city, index, chosenCityIndex, setChosenCityIndex})
{
  const handleClickCity = (index) => { setChosenCityIndex(index) };

  return (<li onClick={() => handleClickCity(index)} className={(index==chosenCityIndex) ? "list-group-item active" : "list-group-item"} key={city}>{city}</li>);
}