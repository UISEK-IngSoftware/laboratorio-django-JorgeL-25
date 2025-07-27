import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ pokemon, mostrarSoloVer = false }) {
  const imagenUrl = pokemon.imagen?.startsWith("http")
    ? pokemon.imagen
    : `${import.meta.env.VITE_API_URL}${pokemon.imagen}`;

  return (
    <div className="card text-center shadow-sm" style={{ width: "200px", margin: "20px", borderRadius: "12px" }}>
      <img
        src={pokemon.imagen}
        alt={pokemon.nombre}
        className="card-img-top"
        style={{ height: "150px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.nombre}</h5>
        <p className="card-text">
          <strong>Tipo:</strong> {pokemon.tipo}
        </p>
        <div className="btn-group">
          <Link to={`/detalle/${pokemon.id}`} className="btn btn-primary btn-sm">
            <i className="fa fa-eye"></i>
          </Link>
          {!mostrarSoloVer && (
            <>
              <Link to={`/editar/${pokemon.id}`} className="btn btn-warning btn-sm">
                <i className="fa fa-edit"></i>
              </Link>
              <button className="btn btn-danger btn-sm">
                <i className="fa fa-trash"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
