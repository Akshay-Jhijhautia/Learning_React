import React from "react";

interface Props {
  cartItems: string[];
  clearCart: () => void;
}

const Cart = ({ cartItems, clearCart }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </>
  );
};

export default Cart;
