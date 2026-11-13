import organizadorImage from "../assets/organizador.png";

export type LearningNode = {
  id: string;
  title: string;
  body: string;
};

/**
 * Content of the graphic organizer ("Mapa mental - Producción textual").
 * Four spelling typos in the original PDF (apredizaje, critica, fué, que gran)
 * were corrected — with the group's authorization — in both the corrected PDF
 * (Recursos/... (corregido).pdf) and this transcription. The original file
 * remains untouched in Recursos/. This structured version is a companion
 * to the organizer image, never a replacement.
 */
/**
 * Final reflection of the group, taken verbatim from the original
 * graphic organizer ("Reflexión" node), as indicated by the course.
 */
export const finalReflection = {
  text: "Ser docente requiere de disciplina, responsabilidad y mucha paciencia. Y adicional a todo eso, es la adecuación a las nuevas eras digitales, sin perder el toque humano.",
  source: "Organizador gráfico del curso · Nodo «Reflexión»",
} as const;

export const organizer = {
  image: organizadorImage,
  alt: "Mapa mental original del curso: siete tarjetas de colores alrededor de una figura con lápiz, titulado Mapa Mental.",
  title: "Mapa mental — Producción textual",
  nodes: [
    {
      id: "reflexion",
      title: "Reflexión",
      body: "Ser docente requiere de disciplina, responsabilidad y mucha paciencia. Y adicional a todo eso, es la adecuación a las nuevas eras digitales, sin perder el toque humano.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      body: "La introducción de la inteligencia artificial a nuestras vidas es una realidad. Definitivamente es muy importante comprender y analizar, de forma crítica y racional, el uso de estas herramientas a su justa medida.",
    },
    {
      id: "dificultades",
      title: "Dificultades",
      body: "Reconocer que nuestra formación escolar dejó demasiados vacíos de aprendizaje y ahora en la etapa profesional, no permite avanzar de manera clara en los nuevos desarrollos.",
    },
    {
      id: "retos",
      title: "Retos",
      body: "Ser honesto e imparcial a la hora de hacer los trabajos, para que no recaiga peso en la moral de: Dejarle todo a la IA cuando justamente estamos aprendiendo a usarla de forma positiva.",
    },
    {
      id: "recuerdo",
      title: "Recuerdo divertido",
      body: "La competencia de insultos formales y pirobos graciosos fue una de las mejores demostraciones que, a veces la imaginación nos queda corta, mantener la postura y no caer en lo vulgar es retador jajaja",
    },
    {
      id: "autoevaluacion",
      title: "Autoevaluación",
      body: "Aún falta mucho por aprender, pero qué gran descubrimiento es tener al alcance todas las herramientas que surgen cada día para la formación.",
    },
    {
      id: "motivacion",
      title: "Motivación",
      body: "Contribuir al desarrollo y crecimiento de los niños, aportando a su aprendizaje, es la verdadera premiación.",
    },
  ] as LearningNode[],
} as const;
