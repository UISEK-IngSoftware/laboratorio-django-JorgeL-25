import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function PokemonCard({ pokemon, mostrarSoloVer }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este Pokémon?")) {
      try {
        await api.delete(`/pokemon/${id}/`);
        window.location.reload();
      } catch (error) {
        console.error("Error eliminando Pokémon", error);
      }
    }
  };

  return (
    <div className="card text-center m-3" style={{ width: "200px" }}>
      <img
        src={pokemon.imagen}
        className="card-img-top p-2"
        alt={pokemon.nombre}
        style={{ height: "150px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.nombre}</h5>
        <p className="card-text">
          <strong>Tipo:</strong> {pokemon.tipo}
        </p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => navigate(`/detalle/${pokemon.id}`)}
            className="btn btn-primary mx-1"
          >
            <i className="fas fa-eye"></i>
          </button>

          {!mostrarSoloVer && (
            <>
              <Link
                to={`/editar/${pokemon.id}`}
                className="btn btn-warning mx-1"
              >
                <i className="fas fa-edit"></i>
              </Link>
              <button
                onClick={() => handleDelete(pokemon.id)}
                className="btn btn-danger mx-1"
              >
                <i className="fas fa-trash"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
