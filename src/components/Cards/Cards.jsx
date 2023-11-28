import Card from "../Card/Card";
import React from "react";
function Cards({ pokemones, onClose }) {
  return (
    <div className="cards">
      {pokemones.map(({ id, name, sprites }, index) => {
        const imageUrl = sprites ? sprites.other.dream_world.front_default : "";

        return (
          <Card
            onClose={onClose}
            id={id}
            key={id}
            name={name}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
}

export default Cards;
