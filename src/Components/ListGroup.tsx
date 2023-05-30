import React from "react";

const ListGroup = () => {
  const cities = ["Bangalore", "Hyderabad", "Chennai", "Mysore", "Gurgaon"];
  return (
    <>
      <h1>List of cities</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
