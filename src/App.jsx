import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Aboult from "./components/Aboult/Aboult";
import Navbar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
const EMAIL = "diegoduvan321@gmail.com";
const PASSWORD = "abc123";
function App() {
  const [pokemones, setPokemones] = useState([]);
  const { pathname } = useLocation();
  // useEffect(() => {
  //   const getPokemones = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  //       );
  //       const listaPokemones = response.data.results;
  //       const pokemonDataPromises = listaPokemones.map(async (pokemon) => {
  //         const res = await axios.get(pokemon.url);
  //         return res.data;
  //       });
  //       const pokemonData = await Promise.all(pokemonDataPromises);
  //       setPokemones(pokemonData);
  //     } catch (error) {
  //       console.error("Error al obtener los Pokémon:", error);
  //     }
  //   };
  //   getPokemones();
  // }, []);
  function onSearch(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => {
      if (data.name) {
        setPokemones((oldPoke) => [...oldPoke, data]);
      } else {
        window.alert("!No hay personjes con este ID");
      }
    });
  }
  function onClose(id) {
    setPokemones(
      pokemones.filter((poke) => {
        return poke.id !== Number(id);
      })
    );
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div className="">
      {pathname !== "/" && <Navbar onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards pokemones={pokemones} onClose={onClose} />}
        />
        <Route path="/about" element={<Aboult />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
