# Laboratorio 9: React – Primeros pasos

### Objetivo:
Construir la pantalla principal de una lista de Pokémon utilizando React y Material UI. Esta pantalla debe incluir un encabezado con logo y navegación, y una grilla de tarjetas de Pokémon con botón de “ver detalle”.

### Requisitos previos
- Node.js y npm instalados
- Editor de código (recomendado: VS Code)
- Navegador actualizado (recomendado: Chrome)
- React (usar Vite)

### Requisitos técnicos
- Material UI (@mui/material, @emotion/react, @emotion/styled)
- No se va a consumir una API real, se va a trabajar con datos simulados

### Estructura sugerida
```
/src
  /components
    Header.jsx
    PokemonCard.jsx
  /data
    pokemons.js
  App.jsx
  main.jsx
```

## Instalación del proyecto

1. **Clonar el repositorio** (este paso lo hará GitHub Classroom automáticamente).
2. Abrir en VS Code la carpeta de tu repositorio clonado
3. Instalar las dependencias base:
   ```bash
   npm install
   ```
4. Instalar Material UI y sus dependencias:
 ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

### Comandos útiles
- Ejecutar el servidor de desarrollo
    ```bash
    npm run dev
    ```
- Comprobar versión de dependencias
    ```bash
    npm list
    ```
- Limpiar dependencias
    ```bash
    rm -rf node_modules
    npm install
    ```

### Comandos git
- Verificar los archivos modificados
    ```bash
    git status
    ```
- Agregar archivos al área de preparación
    ```bash
    git add .
    ```
- Realizar un commit
    ```bash
    git commit -m "Laboratorio 9: pantalla de Pokédex terminada"
    ```
- Enviar los cambios a github
    ```bash
    git push
    ```