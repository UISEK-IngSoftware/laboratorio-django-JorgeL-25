import { useState } from 'react';
import {
  Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Typography
} from '@mui/material';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import { pokemons as initialPokemons } from './data/pokemons';

function App() {
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    imagen: '',
    descripcion: ''
  });

  // Mostrar modal de detalle
  const handleVerDetalle = (pokemon) => setSelectedPokemon(pokemon);
  const handleCloseDetalle = () => setSelectedPokemon(null);

  // Abrir/Cerrar formulario
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => {
    setOpenForm(false);
    setFormData({ nombre: '', tipo: '', imagen: '', descripcion: '' });
  };

  // Manejo de campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Agregar nuevo Pokémon
  const handleAgregar = () => {
    const nuevoPokemon = {
      id: pokemons.length + 1,
      ...formData,
      imagen: formData.imagen || '/images/default.png'
    };
    setPokemons([...pokemons, nuevoPokemon]);
    handleCloseForm();
  };

  // Eliminar Pokémon
  const handleEliminar = (id) => {
    setPokemons(pokemons.filter(p => p.id !== id));
  };

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#ffcc00', // Color llamativo tipo Pikachu
          minHeight: '100vh',
          paddingTop: 4,
          paddingBottom: 4
        }}
      >
        <Button
          onClick={handleOpenForm}
          variant="outlined"
          sx={{ mb: 4, color: '#000', borderColor: '#000' }}
        >
          Agregar Pokémon
        </Button>

        {/* Grid responsivo */}
        <Grid container spacing={2} justifyContent="center">
          {pokemons.map(p => (
            <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
              <PokemonCard
                pokemon={p}
                onVerDetalle={handleVerDetalle}
                onEliminar={handleEliminar}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal de detalle */}
      <Dialog open={!!selectedPokemon} onClose={handleCloseDetalle}>
        {selectedPokemon && (
          <>
            <DialogTitle>{selectedPokemon.nombre}</DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
              <img
                src={selectedPokemon.imagen}
                alt={selectedPokemon.nombre}
                style={{ width: '100%', maxWidth: 250 }}
              />
              <p><strong>Tipo:</strong> {selectedPokemon.tipo}</p>
              <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                {selectedPokemon.descripcion || "Este Pokémon no tiene descripción aún."}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Modal para agregar Pokémon */}
      <Dialog open={openForm} onClose={handleCloseForm}>
        <DialogTitle>Agregar Pokémon</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Ruta de imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            fullWidth
            margin="dense"
            placeholder="/images/mipokemon.png"
          />
          <TextField
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancelar</Button>
          <Button onClick={handleAgregar} variant="contained">Agregar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
