import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditarPokemon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    nombre: "",
    tipo: "",
    peso: "",
    altura: "",
    imagen: null,
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/pokemon/${id}/`)
      .then(res => {
        setPokemon({
          nombre: res.data.nombre,
          tipo: res.data.tipo,
          peso: res.data.peso,
          altura: res.data.altura,
          imagen: null, // no prellenar el input file
        });
      })
      .catch(err => console.error("Error al cargar Pokémon", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen") {
      setPokemon({ ...pokemon, imagen: files[0] });
    } else {
      setPokemon({ ...pokemon, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", pokemon.nombre);
    formData.append("tipo", pokemon.tipo);
    formData.append("peso", pokemon.peso);
    formData.append("altura", pokemon.altura);
    if (pokemon.imagen) {
      formData.append("imagen", pokemon.imagen);
    }

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pokemon/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Pokémon actualizado");
      navigate(`/detalle/${id}`);
    } catch (error) {
      console.error("Error al actualizar el Pokémon", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Editar Pokémon</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="nombre"
          value={pokemon.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          className="form-control mb-3"
          type="text"
          name="tipo"
          value={pokemon.tipo}
          onChange={handleChange}
          placeholder="Tipo"
        />
        <input
          className="form-control mb-3"
          type="number"
          step="0.01"
          name="peso"
          value={pokemon.peso}
          onChange={handleChange}
          placeholder="Peso"
        />
        <input
          className="form-control mb-3"
          type="number"
          step="0.01"
          name="altura"
          value={pokemon.altura}
          onChange={handleChange}
          placeholder="Altura"
        />
        <input
          className="form-control mb-3"
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleChange}
        />
        <button className="btn btn-success" type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarPokemon;
