#  Rick and Morty Explorer

Aplicación web SPA desarrollada con **React** que consume la [API pública de Rick and Morty](https://rickandmortyapi.com) para visualizar y explorar personajes de la serie.

## 📋 Descripción

Esta aplicación permite:
- **Ver todos los personajes** con paginación
- **Filtrar personajes por especie** (Human, Alien, Robot, etc.)
- **Buscar personajes por nombre**
- **Ver detalles individuales** de cada personaje
- Navegación fluida mediante **React Router DOM**

## 🚀 Instrucciones de Ejecución

### Prerrequisitos
- [Node.js](https://nodejs.org/) (v18 o superior)
- npm (incluido con Node.js)

### Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd Segundo_Entregable
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador la URL que aparece en la terminal (por defecto `http://localhost:5173`)

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19.x | Framework principal |
| React Router DOM | 7.x | Navegación SPA |
| Vite | 8.x | Bundler / Dev Server |
| CSS3 | — | Estilos personalizados |
| JavaScript ES6+ | — | Lógica de la aplicación |

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── CharacterCard/     # Tarjeta de personaje
│   ├── Loading/           # Indicador de carga
│   ├── Navbar/            # Barra de navegación
│   └── Pagination/        # Componente de paginación
├── hooks/
│   └── useCharacters.js   # Custom hooks para consumo de API
├── pages/
│   ├── CharacterDetail/   # Detalle de personaje
│   ├── ErrorPage/         # Página de error 404
│   ├── FilterBySpecies/   # Filtrado por especie
│   └── Home/              # Página principal
├── App.jsx                # Componente raíz con rutas
├── App.css                # Estilos del layout
├── main.jsx               # Punto de entrada
└── index.css              # Sistema de diseño global
```

## 🎯 Funcionalidades

| # | Funcionalidad | Estado |
|---|---|---|
| RF01 | Visualización de personajes | ✅ |
| RF02 | Navegación con React Router | ✅ |
| RF03 | Filtrado por especie | ✅ |
| RF04 | Consumo de API REST (fetch) | ✅ |
| RF05 | Diseño responsivo | ✅ |
| Extra | Paginación | ✅ |
| Extra | Buscador por nombre | ✅ |
| Extra | Detalle individual | ✅ |
| Extra | Página de error 404 | ✅ |

## 🌐 API Utilizada

- **Base URL**: `https://rickandmortyapi.com/api`
- **Endpoint de personajes**: `/character`
- **Documentación**: [rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

## 👤 Autor

Estudiante — Segundo Entregable, Mayo 2026
