# New CV - Portafolio Personal

Aplicacion web de portafolio/CV construida con React + TypeScript, enfocada en mostrar perfil profesional, experiencia, formacion, proyectos y contacto en una sola pagina responsive.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Iconify + Lucide React (iconos)
- ESLint 9

## Secciones del sitio

- Hero
- Sobre Mi
- Proyectos
- Habilidades
- Experiencia (timeline)
- Educacion
- Contactame
- Footer

## Scripts disponibles

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Ejecutar en local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar servidor de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

```text
http://localhost:5173
```

## Estructura principal

```text
src/
  assets/                # Imagenes e iconos
  components/
    layout/              # Navbar y Footer
    sections/            # Secciones del CV
  data/                  # Informacion editable del perfil
  types/                 # Tipos TypeScript
  App.tsx
  index.css
```

## Donde editar el contenido

Si quieres actualizar informacion sin tocar componentes, edita estos archivos:

- `src/data/principal.ts` -> nombre, titulo, bio, ubicacion, redes, correo.
- `src/data/about.ts` -> descripcion personal y highlights.
- `src/data/projects.ts` -> proyectos y tecnologias.
- `src/data/skills.ts` -> stack tecnico por categoria.
- `src/data/experience.ts` -> experiencia laboral/academica (timeline).
- `src/data/education.ts` -> formacion academica.

## Build de produccion

```bash
npm run build
```

El resultado se genera en `dist/`.

## Notas

- Proyecto optimizado para desktop y mobile.
- Navegacion por anclas (`#about`, `#projects`, `#skills`, `#experience`, `#education`, `#contact`).
- Animaciones suaves de entrada y hover, con respeto a `prefers-reduced-motion`.
