import React, { useState } from "react";
import api from "../api"; // tu cliente Axios con token dinámico
import { useAuth } from "../context/AuthContext"; // ruta real si usas otro nombre

const AgregarPokemon = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("peso", peso);
    formData.append("altura", altura);
    if (imagen) formData.append("imagen", imagen);

    try {
      await api.post("/pokemon/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMensaje("Pokémon agregado exitosamente");
      setNombre("");
      setTipo("");
      setPeso("");
      setAltura("");
      setImagen(null);
    } catch (error) {
      console.error(error);
      setMensaje("Error al agregar Pokémon. Verifica el token.");
    }
  };

  if (!token) {
    return <p className="alert alert-danger">Iniciar sesión para agregar Pokémon.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Agregar Nuevo Pokémon</h2>
      {mensaje && <div className="alert alert-info">{mensaje}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-dark w-100">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AgregarPokemon;
