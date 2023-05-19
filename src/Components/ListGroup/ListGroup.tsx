import { useState } from "react";
import styles from "./Listgroup.module.css";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ cities, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No items allowed</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {cities.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
