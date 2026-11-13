import type { ImageMetadata } from "astro";

import julianaPhoto from "../assets/fotos/juliana.png";
import atyPhoto from "../assets/fotos/aty.png";
import sarahPhoto from "../assets/fotos/sarah.png";
import silviaPhoto from "../assets/fotos/silvia.jpg";

export type MemberSection = {
  title: string;
  body: string;
};

export type Member = {
  id: string;
  name: string;
  program: string;
  university: string;
  photo: ImageMetadata;
  photoAlt: string;
  tags?: string[];
  age?: string;
  city?: string;
  profession?: string;
  sections: MemberSection[];
};

/**
 * Verbatim content from the students' portfolio document.
 * Each member keeps their own headings and wording untouched.
 */
export const members: Member[] = [
  {
    id: "juliana",
    name: "Juliana Andrea Amaya Rodríguez",
    program: "Licenciatura en Educación Infantil",
    university: "Universidad del Magdalena",
    photo: julianaPhoto,
    photoAlt:
      "Retrato de Juliana Andrea Amaya Rodríguez sonriendo, con blusa azul y blusa negra con estampado.",
    age: "24 años",
    city: "Santa Marta",
    profession: "Estudiante Licenciatura en Ed. Infantil",
    tags: ["Carismática", "Creativa", "Sensible", "Inglés"],
    sections: [
      {
        title: "Mi perfil",
        body: "Me caracterizo por ser una persona responsable, comprometida, disciplinada y con disposición para aprender constantemente. Considero fundamental promover ambientes educativos seguros, afectivos e inclusivos, donde cada niño pueda desarrollar sus capacidades de acuerdo con sus necesidades y ritmos de aprendizaje.",
      },
      {
        title: "Metas",
        body: "Mi propósito es continuar creciendo personal y profesionalmente para contribuir a una educación más humana, significativa y transformadora.",
      },
    ],
  },
  {
    id: "aty",
    name: "Aty Maney Keywin Mestre Izquierdo",
    program: "Licenciatura en Educación Infantil",
    university: "Universidad del Magdalena",
    photo: atyPhoto,
    photoAlt:
      "Retrato de Aty Maney Keywin Mestre Izquierdo, con cabello ondulado, lentes y collar de chaquira.",
    sections: [
      {
        title: "Perfil académico",
        body: "Estudiante de Licenciatura en Educación Infantil, interesada en conocer y fortalecer los procesos educativos, comprender las diferentes realidades de la infancia y explorar estrategias pedagógicas que puedan desarrollarse en diversos contextos. Su interés por la educación también está vinculado al reconocimiento de la identidad cultural y la diversidad. Busca construir una práctica docente que integre los aprendizajes académicos con las particularidades de cada entorno educativo.",
      },
    ],
  },
  {
    id: "sarah",
    name: "Sarah Camila Henao Arregoces",
    program: "Licenciatura en Educación Infantil",
    university: "Universidad del Magdalena",
    photo: sarahPhoto,
    photoAlt: "Retrato de Sarah Camila Henao Arregoces, con cabello largo y audífonos inalámbricos.",
    sections: [
      {
        title: "Resumen profesional y áreas de interés",
        body: "Estudiante de Licenciatura en Educación Infantil de la Universidad del Magdalena, impulsada por un profundo compromiso con la educación inclusiva y de calidad en la primera infancia. Mi formación académica y vocación se centran en el desarrollo integral de los niños y las niñas, abordando críticamente los procesos de enseñanza y aprendizaje desde perspectivas pedagógicas innovadoras, transversadas por los principios de la inclusión efectiva y el respeto a la diversidad.",
      },
      {
        title: "Competencias y atributos clave",
        body: "Me caracterizo por mi alta responsabilidad, creatividad innata en el diseño y ejecución de experiencias de aprendizaje, una constante disposición para el aprendizaje continuo y la adaptabilidad a diversos contextos educativos, así como una sólida capacidad para el trabajo colaborativo e interdisciplinario, siempre bajo un enfoque ético y profesional.",
      },
      {
        title: "Visión y objetivo",
        body: "Aspiro a fortalecer incesantemente mis conocimientos y habilidades pedagógicas para, desde el rigor académico, ética profesional y sensibilidad humana, contribuir significativamente a una educación de calidad durante la primera infancia. Mi meta fundamental es generar un impacto tangible, significativo y profundamente positivo que marque la trayectoria de vida y el futuro de cada niño y niña, potenciando su máximo desarrollo.",
      },
    ],
  },
  {
    id: "silvia",
    name: "Silvia Lorena Sarmiento Gómez",
    program: "Licenciatura en Educación Infantil",
    university: "Universidad del Magdalena",
    photo: silviaPhoto,
    photoAlt:
      "Retrato de Silvia Lorena Sarmiento Gómez, con cabello negro largo y camiseta amarilla.",
    sections: [
      {
        title: "Perfil académico",
        body: "Estudiante de Licenciatura en Educación Infantil de la Universidad del Magdalena, con interés en el desarrollo integral de la infancia y en los procesos de enseñanza y aprendizaje durante los primeros años de vida. Me caracterizo por ser una persona responsable, creativa, comprometida y con disposición para aprender y fortalecer continuamente mis conocimientos y habilidades pedagógicas. Tengo especial interés en la educación inclusiva, el acompañamiento del desarrollo infantil y la implementación de estrategias lúdicas y didácticas que favorezcan aprendizajes significativos. Mi propósito es contribuir a la formación de niños y niñas mediante experiencias educativas dinámicas, respetuosas y enriquecedoras.",
      },
    ],
  },
];
