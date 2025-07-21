import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

export default function PokemonCard({ pokemon, onVerDetalle, onEliminar }) {
  return (
    <Card
      sx={{
        width: 220,
        height: 340,
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <CardMedia
        component="img"
        image={pokemon.imagen}
        alt={pokemon.nombre}
        sx={{
          width: '160px',
          height: '160px',
          objectFit: 'contain',
          marginTop: 2
        }}
        onError={(e) => { e.target.src = '/images/default.png'; }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">{pokemon.nombre}</Typography>
        <Typography variant="body2" color="text.secondary">
          Tipo: {pokemon.tipo}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Button size="small" variant="contained" onClick={() => onVerDetalle(pokemon)}>
          Ver Detalle
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => onEliminar(pokemon.id)}
        >
          Eliminar
        </Button>
      </Box>
    </Card>
  );
}
