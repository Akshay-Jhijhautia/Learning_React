import React, { MouseEvent } from "react";

const ListGroup = () => {
  let cities = ["Bangalore", "Hyderabad", "Chennai", "Mysore", "Gurgaon"];

  const handleClick = (event: MouseEvent) => console.log(event.type);

  return (
    <>
      <h1>List of cities</h1>
      {cities.length === 0 && <p>No city found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
