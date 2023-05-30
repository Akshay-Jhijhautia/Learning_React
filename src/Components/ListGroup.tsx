import React from "react";

const ListGroup = () => {
  let cities = ["Bangalore", "Hyderabad", "Chennai", "Mysore", "Gurgaon"];
  //cities = [];

  return (
    <>
      <h1>List of cities</h1>
      {cities.length === 0 && <p>No city found</p>}
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
