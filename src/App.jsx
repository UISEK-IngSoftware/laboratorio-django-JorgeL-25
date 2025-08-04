import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import PokemonCard from "./components/PokemonCard";
import AgregarPokemon from "./components/AgregarPokemon";
import EditarPokemon from "./components/EditarPokemon";
import DetallePokemon from "./components/DetallePokemon";
import Header from "./components/Header";
import Login from "./components/Login";

import { useAuth } from "./context/AuthContext";
import api from "./api";
import "./App.css";

function ListaPokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    api
      .get("/pokemon/")
      .then((res) => setPokemones(res.data))
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los datos");
      });
  }, [token]);

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="pokemon-grid">
        {pokemones.map((poke) => (
          <PokemonCard
            key={poke.id}
            pokemon={poke}
            mostrarSoloVer={!token}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const { token } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Ruta siempre disponible */}
          <Route path="/" element={<ListaPokemon />} />

          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />

          {/* Rutas protegidas */}
          {token && (
            <>
              <Route path="/crear" element={<AgregarPokemon />} />
              <Route path="/editar/:id" element={<EditarPokemon />} />
              <Route path="/detalle/:id" element={<DetallePokemon />} />
            </>
          )}

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
