export default function Plant({ plant, addItems }) {
    return (
      <li className="plant">
        <figure>{plant.image}</figure>
        <h3>{plant.name}</h3>
        <button onClick={() => addItems(plant)}>Add Item</button>
      </li>
    );
  }