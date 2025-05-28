import { useState } from "react";
import PLANTS from "./data";

import Cart from "./components/Cart";
import Plants from "./components/Plants";

export default function App() {
  const [cart, setCart] = useState([])

  const addItems = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeItems = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <h1>Pick a Plant!</h1>
      <main>
        <Plants plants={PLANTS} addItems={addItems} />
        <Cart
          cart={cart}
          removeItems={removeItems}
          addItems={addItems}
        />
      </main>
    </>
  );
}
