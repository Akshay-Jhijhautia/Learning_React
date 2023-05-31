import React from "react";

interface Props {
  noOfCartItems: number;
}
const Navbar = ({ noOfCartItems }: Props) => {
  return <div>Navbar: {noOfCartItems}</div>;
};

export default Navbar;
