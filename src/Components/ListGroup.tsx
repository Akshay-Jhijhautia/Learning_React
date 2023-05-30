import { useState } from "react";

const ListGroup = () => {
  const [active, setActive] = useState(-1);
  let cities = ["Bangalore", "Hyderabad", "Chennai", "Mysore", "Gurgaon"];

  return (
    <>
      <h1>List of cities</h1>
      {cities.length === 0 && <p>No city found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              active === index ? "list-group-item active" : "list-group-item"
            }
            key={city}
            onClick={() => setActive(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
