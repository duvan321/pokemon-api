import { useState } from "react";
import Validation from "../Validation";
const Form = ({ login }) => {
  const image =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png";
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErros] = useState({});
  const handleChange = (event) => {
    setErros(
      Validation({ ...userData, [event.target.name]: event.target.value })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <div className="card-form">
      <img className="pokemon-image " src={image} alt="" />
      <form onSubmit={handlerSubmit} action="">
        <label htmlFor="">Email:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          value={userData.email}
          name="email"
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          value={userData.password}
          name="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
