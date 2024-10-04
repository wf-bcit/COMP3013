export function ListGroupCities({cities}) {
    const handleClick = (city, index) => {console.log(city, index);};
    return (
      <>     
        <ul className="list-group">
          {cities.map((city, index) => (
            <li onClick={() => handleClick(city, index)} className="list-group-item" key={city}>{city}</li>
          ))}
        </ul>
      </>
    );
  }