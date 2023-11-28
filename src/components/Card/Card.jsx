import { Link } from "react-router-dom";

const Card = (props) => {
  const imageUrl = props.imageUrl;
  return (
    <div className="card">
      <button
        onClick={() => {
          props.onClose(props.id);
        }}
      >
        x
      </button>

      <img src={imageUrl} alt={props.name} className="pokemon-image" />

      <h3>{props.id}</h3>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>{" "}
      </Link>
    </div>
  );
};
export default Card;
