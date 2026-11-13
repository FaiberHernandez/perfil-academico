export const site = {
  title: "Entre Letras y Algoritmos",
  subtitle:
    "Una reflexión sobre la escritura, el pensamiento crítico y la inteligencia artificial.",
  institution: {
    name: "Universidad del Magdalena",
    faculty: "Facultad de Ciencias de la Educación",
    program: "Licenciatura en Educación Infantil",
    group: "Grupo 2",
  },
  course: "Producción Textual con IA",
  teacher: "Manuel Alfonso Ospino Cortina",
  date: "13 de noviembre de 2026",
  membersLabel: "Integrantes",
} as const;

export type Site = typeof site;

export const sections = [
  { id: "portada", number: "01", label: "Portada" },
  { id: "identidades", number: "02", label: "Identidades" },
  { id: "debate", number: "03", label: "El debate" },
  { id: "aprendizaje", number: "04", label: "Nuestro aprendizaje" },
  { id: "cierre", number: "05", label: "Cierre" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
