import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src="/images/logo.png" height="140" />
        </Box>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}
