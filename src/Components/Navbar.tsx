import React from "react";

interface Props {
  numberOfItems: number;
}

const Navbar = ({ numberOfItems }: Props) => {
  return <div>Navbar= {numberOfItems}</div>;
};

export default Navbar;
