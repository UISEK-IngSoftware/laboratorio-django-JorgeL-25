import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";
import AgregarPokemon from "./components/AgregarPokemon";
import EditarPokemon from "./components/EditarPokemon";
import DetallePokemon from "./components/DetallePokemon";
import Header from "./components/Header";
import "./App.css";

function ListaPokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/pokemon/`)
      .then((res) => setPokemones(res.data))
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los datos");
      });
  }, []);

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="pokemon-grid">
        {pokemones.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} mostrarSoloVer={true} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<ListaPokemon />} />
          <Route path="/crear" element={<AgregarPokemon />} />
          <Route path="/editar/:id" element={<EditarPokemon />} />
          <Route path="/detalle/:id" element={<DetallePokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
