import { useState } from "react";

export function ListGroupCities({cities, selectedCityIndex, setSelectedCityIndex}) {

    return (
      <>     
        <ul className="list-group">
          {cities.map((city, index) => (
            <GroupCity city={city} index={index} selectedCityIndex={selectedCityIndex} setSelectedCityIndex={setSelectedCityIndex} />
          ))}
        </ul>
      </>
    );
  }

export function GroupCity({city, index, selectedCityIndex, setSelectedCityIndex})
{
  const handleClickCity = (index) => { setSelectedCityIndex(index) };
  return (<li onClick={() => handleClickCity(index)} className={(index==selectedCityIndex) ? "list-group-item active" : "list-group-item"} key={index}>{city}</li>);
}