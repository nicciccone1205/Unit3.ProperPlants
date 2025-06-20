import CartItem from "./CartItem";

import "./style.css";

export default function Cart({ cart, removeItems, addItems }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addItems={addItems}
                removeItems={removeItems}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}