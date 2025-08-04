import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api"; // Cliente axios con token
import { useAuth } from "../context/AuthContext";

function DetallePokemon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los datos del Pokémon");
      });
  }, [id]);

  const eliminarPokemon = () => {
    if (confirm("¿Estás seguro de eliminar este Pokémon?")) {
      api
        .delete(`/pokemon/${id}/`)
        .then(() => navigate("/"))
        .catch((err) => {
          console.error(err);
          setError("Error al eliminar Pokémon");
        });
    }
  };

  if (error) {
    return <div className="alert alert-danger text-center mt-4">{error}</div>;
  }

  if (!pokemon) {
    return <p className="text-center mt-5">Cargando...</p>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "350px" }}>
        <img
          src={pokemon.imagen}
          alt={pokemon.nombre}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "contain",
            marginBottom: "20px",
          }}
        />
        <div className="card-body text-center">
          <h3 className="card-title">{pokemon.nombre}</h3>
          <p className="card-text"><strong>Tipo:</strong> {pokemon.tipo}</p>
          <p className="card-text"><strong>Peso:</strong> {pokemon.peso} kg</p>
          <p className="card-text"><strong>Altura:</strong> {pokemon.altura} cm</p>

          {token && (
            <div className="btn-group mt-3">
              <Link to={`/editar/${pokemon.id}`} className="btn btn-warning">
                <i className="fa fa-edit"></i> Editar
              </Link>
              <button onClick={eliminarPokemon} className="btn btn-danger">
                <i className="fa fa-trash"></i> Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetallePokemon;
