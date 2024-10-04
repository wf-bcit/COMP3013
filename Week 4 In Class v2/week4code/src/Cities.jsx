import { useState } from "react";

export function ListGroupCities({cities}) {
    const [cityClass, setCityClass] = useState("list-group-item");

    const [chosenCityIndex, setChosenCityIndex] = useState("");

    const handleClick = (city, index) => {
      setChosenCityIndex(index);
      console.log(city, index);
    };

    const handleActive = (index, chosenIndex) => {
      console.log("hello yellow");
      return ("list-group-item");
    };

    // return (
    //   <>     
    //     <ul className="list-group">
    //       {cities.map((city, index) => (
    //         <li onClick={() => handleClick(city, index)} className={"list-group-item"} key={city}>{city}</li>
    //       ))}
    //     </ul>
    //   </>
    // );

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
  const handleClickCity = (city, index) => {console.log(city, index);};

  return (<li onClick={() => handleClickCity(city, index)} className={"list-group-item"} key={city}>{city}</li>);
}