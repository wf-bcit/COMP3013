import { useState } from "react";

export function ListGroupCities({cities}) {
    const [cityClass, setCityClass] = useState("list-group-item");

    const [chosenCityIndex, setChosenCityIndex] = useState("");


    return (
      <>     
        <ul className="list-group">
          {cities.map((city, index) => (
            <GroupCity city={city} index={index} />
          ))}
        </ul>
      </>
    );


  }

export function GroupCity({city, index})
{
  const [cityClass, setCityClass] = useState("list-group-item");

  const handleClickCity = (city, index) => {
    console.log(city, index);
    setCityClass("list-group-item active");
  };

  return (<li onClick={() => handleClickCity(city, index)} className={cityClass} key={city}>{city}</li>);
}