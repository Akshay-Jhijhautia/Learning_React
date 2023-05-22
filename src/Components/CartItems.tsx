import React from "react";

interface Props {
  items: string[];
}

const CartItems = ({ items }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </>
  );
};

export default CartItems;
