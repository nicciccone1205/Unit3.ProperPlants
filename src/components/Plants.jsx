import Plant from "./Plant";

import "./style.css";

export default function Plants({ plants, addItems }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addItems={addItems} />
        ))}
      </ul>
    </section>
  );
}