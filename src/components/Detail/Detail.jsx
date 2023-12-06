import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => {
      if (data.name) {
        setPokemon(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setPokemon({});
  }, [id]);
  return (
    <div className="cards">
      <div className="card">
        <p className="id">{pokemon.id}</p>
        <h2 className="name">{pokemon.name && pokemon.name}</h2>
        <img
          className="pokemon-image"
          src={
            pokemon.sprites?.other.dream_world.front_default &&
            pokemon.sprites?.other.dream_world.front_default
          }
          alt=""
        />
      </div>
    </div>
  );
};
export default Detail;
