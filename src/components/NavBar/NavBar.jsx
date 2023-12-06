import SearBarch from "../onSearch/SearchBar";
import { Link } from "react-router-dom";
const Navbar = ({ onSearch }) => {
  return (
    <div>
      <SearBarch onSearch={onSearch} />
      <Link to="/about">
        <button className="botone2">Abaout</button>
      </Link>
      <Link to="/home">
        <button className="botone1">Home</button>
      </Link>
      <Link to="/">
        <button className="botone3">Salir</button>
      </Link>
    </div>
  );
};
export default Navbar;
