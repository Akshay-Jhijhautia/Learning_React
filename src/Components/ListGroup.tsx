import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  const [active, setActive] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No city found</p>}
      <ul className="list-group">
        {items.map((city, index) => (
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
