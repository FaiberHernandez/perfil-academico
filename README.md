# Entre Letras y Algoritmos

Portafolio académico digital de cuatro estudiantes de Licenciatura en Educación Infantil (Universidad del Magdalena), para la asignatura *Producción Textual con IA*. Presenta las identidades académicas del grupo, un ensayo argumentativo sobre escritura e inteligencia artificial, y las reflexiones del curso, con una dirección visual editorial.

## Stack

- [Astro](https://astro.build) + TypeScript
- Tailwind CSS 4 (config por CSS)
- Fuentes autoalojadas (Fraunces + Archivo vía Fontsource)
- Sitio 100 % estático, sin backend

## Desarrollo

```sh
pnpm install
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción en dist/
pnpm preview    # sirve dist/ localmente
```

## Estructura

```
src/
├── data/        # Contenido desacoplado (perfiles, ensayo, referencias, organizador, datos del sitio)
├── sections/    # Secciones de la one-page (Portada, Identidades, Debate, Aprendizaje, Cierre)
├── components/  # Piezas reutilizables (encabezado de sección, marcador de pendiente, etc.)
├── layouts/     # Layout base con navegación y scripts de interacción
├── assets/      # Fotos de las integrantes y organizador gráfico
├── styles/      # Sistema de diseño global
└── pages/       # Punto de entrada (index.astro)
```

## Contenido

Todo el texto vive en `src/data/` (TypeScript tipado), tomado verbatim del documento del grupo (`Recursos/portafolio .docx`). Para actualizar el contenido no hay que tocar componentes: se editan los archivos de datos.

- Lo que aún no ha sido proporcionado se marca con el componente `Pendiente`.
- El organizador gráfico original (`Recursos/Organizador grafico - Produccion textual.pdf`) se muestra íntegro; la versión estructurada de sus nodos es un complemento, no un reemplazo.

## Convenciones

- Conventional commits (sin atribución de IA).
- Gestor de paquetes: pnpm. Los builds postinstal permitidos están declarados en `pnpm-workspace.yaml`.
