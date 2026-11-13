export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "pull"; text: string };

export type EssaySection = {
  id: string;
  kicker?: string;
  heading?: string;
  blocks: EssayBlock[];
};

export const essay = {
  question:
    "¿La escritura asistida por inteligencia artificial fortalece las competencias de escritura y el pensamiento crítico, o puede generar dependencia y debilitar la autonomía del escritor?",
  title:
    "Escribir con inteligencia artificial sin dejar de pensar: posibilidades, riesgos y autonomía en la formación del escritor",
  authors: [
    "Sarah Camila Henao Arregoces",
    "Aty Maney Keywin Mestre Izquierdo",
    "Juliana Andrea Amaya Rodríguez",
    "Silvia Lorena Sarmiento Gómez",
  ],
  affiliation:
    "Facultad de Ciencias de la Educación, Universidad del Magdalena · Licenciatura en Educación Infantil, Grupo 2",
  course: "Producción Textual con IA",
  teacher: "Manuel Alfonso Ospino Cortina",
  date: "13 de noviembre de 2026",
  // Explicit thesis, verbatim from the introduction of the essay.
  thesis:
    "En este ensayo sostenemos que la inteligencia artificial puede ampliar las posibilidades de escritura y fortalecer el pensamiento crítico, pero únicamente cuando se utiliza de manera consciente, después de realizar un esfuerzo intelectual propio y conservando la autonomía del escritor.",
  sections: [
    {
      id: "introduccion",
      kicker: "Introducción",
      blocks: [
        {
          type: "p",
          text: "Desde las antiguas tablillas de arcilla hasta los procesadores de texto actuales, cada nueva tecnología relacionada con la escritura ha despertado preocupaciones sobre sus posibles efectos en la memoria, el pensamiento y las capacidades humanas. La llegada de la inteligencia artificial (IA) generativa ha reavivado este debate con mayor intensidad, pues actualmente existen herramientas capaces de redactar, resumir, traducir, corregir y reformular textos en cuestión de segundos. Esto ha llevado a cuestionarnos si escribir con ayuda de estas tecnologías realmente fortalece nuestras capacidades o, por el contrario, nos vuelve dependientes de ellas. El problema es que esta discusión suele plantearse como una elección entre aceptar completamente la IA o rechazarla por sus posibles consecuencias, dejando de lado una cuestión fundamental: la manera en que la utilizamos determina qué tanto contribuye a nuestro aprendizaje.",
        },
        {
          type: "pull",
          text: "La manera en que la utilizamos determina qué tanto contribuye a nuestro aprendizaje.",
        },
        {
          type: "p",
          text: "En este ensayo sostenemos que la inteligencia artificial puede ampliar las posibilidades de escritura y fortalecer el pensamiento crítico, pero únicamente cuando se utiliza de manera consciente, después de realizar un esfuerzo intelectual propio y conservando la autonomía del escritor. Cuando sustituye el proceso de construcción de ideas, argumentación y reflexión, puede generar dependencia y debilitar las habilidades que precisamente deberían desarrollarse mediante la escritura. Para defender esta postura, examinaremos la escritura como una tecnología que transforma el pensamiento, las posibilidades que ofrece la IA para mejorar los procesos de producción textual, los riesgos relacionados con la dependencia cognitiva y la autoría, y las implicaciones de este debate para la formación de futuros docentes.",
        },
      ],
    },
    {
      id: "escritura-tecnologia",
      kicker: "Argumento 1",
      heading: "La escritura como tecnología del pensamiento",
      blocks: [
        {
          type: "p",
          text: "Para comprender qué está en juego, es necesario reconocer que la escritura nunca ha sido una actividad completamente separada de las herramientas tecnológicas. Walter Ong (1982/2002), una referencia fundamental para comprender la relación entre los medios de comunicación y el pensamiento humano, explica que la escritura no es una capacidad natural, sino una tecnología que transforma nuestra conciencia y permite desarrollar formas de pensamiento analítico y reflexivo. Desde esta perspectiva, incorporar herramientas tecnológicas a la escritura no significa necesariamente deteriorar una capacidad humana original, sino transformar la manera en que pensamos y nos expresamos. Ong también recuerda que Platón cuestionaba la escritura porque consideraba que podía debilitar la memoria y producir una falsa apariencia de conocimiento. Estas preocupaciones guardan una relación interesante con las críticas actuales hacia las tecnologías digitales y la inteligencia artificial.",
        },
        {
          type: "p",
          text: "Esta perspectiva permite comprender que el verdadero problema no consiste en determinar si debemos utilizar herramientas tecnológicas, sino en identificar cómo influyen en nuestros procesos de pensamiento y qué responsabilidades debemos asumir al incorporarlas. La IA representa un nuevo momento en esa transformación, pues permite delegar algunas tareas relacionadas con la producción textual, como la corrección gramatical, la organización de información y la elaboración de borradores. Sin embargo, que una herramienta pueda realizar estas actividades no significa que debamos entregarle todas las decisiones que intervienen en la escritura. El propósito, la intención comunicativa, la selección de argumentos y la valoración de la información deben continuar bajo el control de quien escribe.",
        },
        {
          type: "p",
          text: "Una comparación histórica permite comprender mejor esta transformación. Cuando la fotografía comenzó a popularizarse durante el siglo XIX, algunos pintores y críticos temieron que esta tecnología acabara con la pintura, pues una cámara podía reproducir la realidad con mayor rapidez y precisión que un artista. Sin embargo, la fotografía no eliminó la pintura; por el contrario, contribuyó a que esta explorara nuevas posibilidades relacionadas con el color, la percepción, la subjetividad y la expresión artística. La pintura dejó de estar limitada a reproducir fielmente la realidad y comenzó a desarrollar otras formas de representación.",
        },
        {
          type: "p",
          text: "Algo semejante puede ocurrir con la escritura y la inteligencia artificial. Los modelos de lenguaje pueden realizar rápidamente actividades como corregir errores ortográficos, redactar textos protocolarios, organizar ideas o proponer versiones iniciales de un escrito. Esto permite que el escritor dedique mayor atención a aspectos que requieren su intervención intelectual, como establecer una postura, seleccionar información confiable, construir argumentos, identificar contradicciones y asumir la responsabilidad de lo que comunica. Sin embargo, esta transformación solo representa un avance cuando el escritor participa activamente en el proceso. Si permite que la herramienta decida qué pensar, qué argumentar y cómo expresarlo, no está aprovechando nuevas posibilidades de escritura, sino sustituyendo su propio ejercicio intelectual. Por tanto, así como la fotografía no reemplazó la creatividad del pintor, la IA tampoco debería reemplazar el pensamiento de quien escribe.",
        },
        {
          type: "pull",
          text: "Así como la fotografía no reemplazó la creatividad del pintor, la IA tampoco debería reemplazar el pensamiento de quien escribe.",
        },
      ],
    },
    {
      id: "conocimiento",
      kicker: "Argumento 2",
      heading: "Escribir es una forma de construir conocimiento",
      blocks: [
        {
          type: "p",
          text: "Esta distinción resulta especialmente importante cuando comprendemos que escribir no consiste únicamente en producir oraciones correctas, sino que también es una forma de construir conocimiento. Scardamalia y Bereiter (1992) distinguen entre dos procesos: decir lo que ya se sabe y transformar el conocimiento. El segundo implica reorganizar las ideas, establecer relaciones, resolver dificultades y comprender mejor un tema durante la elaboración del texto. En concordancia con esta perspectiva, Carlino (2005) explica que la escritura permite elaborar los conocimientos que se estudian y que su enseñanza constituye una responsabilidad de las diferentes disciplinas académicas. Por esta razón, el valor de un escrito no debería medirse exclusivamente por su presentación o calidad gramatical, sino también por el proceso de reflexión que permitió construirlo.",
        },
      ],
    },
    {
      id: "productividad",
      kicker: "Argumento 3",
      heading: "Productividad no es aprendizaje",
      blocks: [
        {
          type: "p",
          text: "En este sentido, uno de los principales beneficios de la inteligencia artificial es que puede facilitar determinadas etapas de la producción textual y mejorar la calidad de los resultados. Noy y Zhang (2023) realizaron un experimento con 453 profesionales universitarios a quienes asignaron diferentes tareas de escritura, entre ellas comunicados de prensa, informes y planes de análisis. Los resultados mostraron que quienes utilizaron ChatGPT redujeron aproximadamente un 40 % el tiempo de realización de las tareas y obtuvieron una mejora cercana al 18 % en la calidad de sus textos, según evaluaciones realizadas por expertos. Además, los beneficios fueron mayores para quienes inicialmente presentaban menores habilidades de escritura, lo que contribuyó a reducir las diferencias entre los participantes.",
        },
        {
          type: "p",
          text: "Estos resultados demuestran que la IA puede ampliar las posibilidades de producción textual, facilitar determinadas tareas y ofrecer apoyo a personas que presentan dificultades al escribir. Sin embargo, es importante reconocer que mejorar la productividad no significa necesariamente desarrollar mayores capacidades de escritura. El experimento de Noy y Zhang (2023) demuestra que las personas pueden producir mejores textos con ayuda de la herramienta, pero no permite concluir que hayan aprendido a escribir mejor de manera independiente. Aquí aparece una diferencia fundamental entre obtener un buen resultado con asistencia tecnológica y desarrollar las habilidades necesarias para conseguirlo por cuenta propia.",
        },
        {
          type: "p",
          text: "Esta preocupación encuentra respaldo en investigaciones más recientes. Bastani et al. (2025) realizaron un estudio con cerca de mil estudiantes de secundaria en clases de matemáticas para examinar los efectos de la inteligencia artificial en el aprendizaje. Los resultados mostraron que los estudiantes que utilizaron una herramienta basada en GPT-4 obtuvieron mejores resultados mientras contaban con su asistencia; sin embargo, cuando esta fue retirada, su rendimiento llegó a ser un 17 % inferior al de quienes no habían utilizado la herramienta. Por otra parte, un sistema diseñado para ofrecer orientaciones y pistas sin proporcionar directamente las respuestas ayudó a reducir este efecto negativo. Aunque el estudio se desarrolló en el área de matemáticas y no en escritura, permite identificar un riesgo importante: cuando la IA resuelve las actividades en lugar de orientar al estudiante, puede dificultar el desarrollo de sus propias capacidades.",
        },
        {
          type: "p",
          text: "En una línea relacionada, Kosmyna et al. (2025) realizaron una investigación exploratoria con 54 participantes que desarrollaron ensayos utilizando diferentes condiciones: un modelo de lenguaje, un buscador de internet o ninguna herramienta de apoyo. Mediante el análisis de la actividad cerebral, los investigadores observaron diferencias en los patrones de conectividad de los participantes. Quienes utilizaron el modelo de lenguaje presentaron una menor conectividad cerebral durante la tarea y manifestaron dificultades para recordar o reconocer partes de sus propios textos. También se identificaron diferencias relacionadas con la percepción de autoría. Aunque estos resultados deben interpretarse con cautela, debido al tamaño de la muestra y a que se trata de un trabajo preliminar, plantean preguntas importantes sobre las consecuencias de delegar excesivamente los procesos de escritura.",
        },
        {
          type: "p",
          text: "Por su parte, Gerlich (2025) encontró una relación negativa entre el uso frecuente de herramientas de IA y el pensamiento crítico, asociada con la tendencia a delegar el esfuerzo mental. No obstante, al tratarse de un estudio correlacional, sus resultados no permiten afirmar que la inteligencia artificial sea directamente responsable de una disminución del pensamiento crítico. En conjunto, estas investigaciones muestran que los beneficios de la IA no deben evaluarse únicamente por la rapidez con la que se completa una actividad, sino también por lo que sucede con las capacidades del estudiante cuando deja de contar con esa ayuda.",
        },
      ],
    },
    {
      id: "secuencia",
      kicker: "Argumento 4",
      heading: "Una herramienta que orienta, no que resuelve",
      blocks: [
        {
          type: "p",
          text: "Ante este panorama, surge una pregunta fundamental: ¿cómo podemos utilizar la inteligencia artificial para fortalecer la escritura sin desarrollar dependencia de ella? Una posible respuesta se encuentra en la diferencia entre utilizarla como una herramienta que resuelve y utilizarla como una herramienta que orienta. El estudio de Bastani et al. (2025) permite comprender que la manera en que se configura la asistencia tecnológica puede influir en los resultados del aprendizaje. Trasladando esta idea al ámbito de la escritura, la IA puede ser más provechosa cuando formula preguntas, señala contradicciones, identifica párrafos poco claros o propone diferentes perspectivas, en lugar de entregar directamente un ensayo terminado.",
        },
        {
          type: "p",
          text: "Por ejemplo, un estudiante podría elaborar primero su propia tesis y desarrollar un borrador con sus conocimientos e ideas. Posteriormente, podría consultar a la IA para identificar debilidades en sus argumentos, encontrar posibles objeciones y revisar la coherencia de sus párrafos. Finalmente, tendría que decidir qué sugerencias acepta, cuáles rechaza y por qué. De esta manera, la herramienta participa en el proceso, pero las decisiones intelectuales continúan perteneciendo al escritor. Esta forma de utilización también permite aprovechar los beneficios identificados por Noy y Zhang (2023), sin renunciar al esfuerzo que requiere aprender a escribir.",
        },
        {
          type: "pull",
          text: "Pensar primero, escribir con nuestras propias ideas y consultar después.",
        },
      ],
    },
    {
      id: "contraargumentos",
      kicker: "Contraargumentos",
      heading: "Los límites de nuestra postura",
      blocks: [
        {
          type: "p",
          text: "Ahora bien, esta postura no está libre de cuestionamientos. Una de las objeciones más importantes sostiene que los modelos de lenguaje pueden producir textos convincentes sin comprender realmente lo que comunican. Bender et al. (2021) describen estos sistemas mediante la expresión «loros estocásticos», haciendo referencia a su capacidad para generar combinaciones de palabras a partir de patrones estadísticos, sin que esto implique una comprensión genuina de su significado. Además, advierten que pueden reproducir prejuicios y sesgos presentes en los datos utilizados durante su entrenamiento. De manera semejante, Floridi y Chiriatti (2020) explican que sistemas como GPT-3 pueden generar respuestas aparentemente inteligentes sin que ello signifique que poseen comprensión o inteligencia en el sentido humano.",
        },
        {
          type: "p",
          text: "Esta objeción también plantea preocupaciones sobre la autoría, pues cuando un estudiante entrega un texto elaborado casi completamente por una herramienta, puede terminar presentando como propio un pensamiento que no construyó. Asimismo, existe el riesgo de que diferentes personas comiencen a producir textos demasiado similares, perdiendo progresivamente su voz y estilo personal. Estas preocupaciones son especialmente relevantes en los procesos educativos, donde la escritura no debería limitarse a obtener una calificación, sino que debe contribuir al desarrollo de la autonomía, la reflexión y la capacidad de argumentar.",
        },
        {
          type: "p",
          text: "Consideramos que esta objeción tiene razón al señalar los riesgos, pero no necesariamente conduce a la conclusión de que debemos rechazar la inteligencia artificial. Precisamente porque estos sistemas no pueden asumir la responsabilidad humana sobre el significado, la veracidad y las consecuencias de sus respuestas, el escritor debe conservar un papel activo durante todo el proceso. La herramienta puede proponer información, pero corresponde a la persona verificarla; puede sugerir argumentos, pero es el escritor quien debe evaluar su pertinencia; puede redactar un párrafo, pero no puede asumir la responsabilidad académica y ética de presentarlo como propio. Por tanto, la falta de comprensión de la máquina no vuelve innecesario el criterio humano, sino que hace indispensable su participación.",
        },
        {
          type: "p",
          text: "También debemos reconocer que la utilización de estas herramientas plantea dificultades relacionadas con la honestidad académica. Sin embargo, prohibirlas completamente o confiar exclusivamente en programas que intentan detectar textos generados por IA tampoco representa una solución adecuada. Liang et al. (2023) demostraron que diferentes detectores de inteligencia artificial podían identificar injustamente como generados por IA textos escritos por personas que no tenían el inglés como lengua materna. Este hallazgo evidencia que confiar ciegamente en estos sistemas puede producir nuevas injusticias, especialmente cuando se utilizan para tomar decisiones académicas sin considerar las condiciones particulares de los estudiantes.",
        },
        {
          type: "p",
          text: "Frente a estas dificultades, la UNESCO, mediante las orientaciones de Miao y Holmes (2023), propone un enfoque centrado en las personas, que incluye la formación de docentes, el establecimiento de orientaciones claras y el desarrollo de competencias para utilizar la IA de manera ética y responsable. Esto demuestra que el desafío educativo no consiste simplemente en permitir o prohibir estas tecnologías, sino en enseñar a utilizarlas con criterio, transparencia y responsabilidad.",
        },
        {
          type: "p",
          text: "Existe, además, otra consideración que no podemos ignorar: para algunos estudiantes, especialmente quienes presentan dificultades en la escritura académica o se encuentran en procesos de aprendizaje de una segunda lengua, la inteligencia artificial puede representar un apoyo significativo. Negarles completamente el acceso a estas herramientas en nombre de la autonomía podría aumentar las desigualdades educativas. Por eso, nuestra postura no consiste en rechazar su utilización, sino en garantizar que todos los estudiantes reciban orientación para aprovechar sus beneficios sin renunciar al desarrollo de sus propias capacidades. Como plantea Carlino (2005), enseñar a escribir es una responsabilidad de las instituciones educativas y no una habilidad que deba darse por adquirida. La incorporación de la IA hace que esta responsabilidad sea todavía más importante.",
        },
      ],
    },
    {
      id: "formacion-docente",
      kicker: "Implicaciones",
      heading: "Implicaciones para la formación docente",
      blocks: [
        {
          type: "p",
          text: "Estas reflexiones adquieren una relevancia particular en la formación de futuros docentes. Quienes nos preparamos para trabajar en educación infantil debemos comprender que la escritura no es únicamente una actividad académica, sino también una herramienta para organizar ideas, expresar pensamientos y construir conocimientos. Difícilmente podremos acompañar a niñas y niños en el desarrollo de estas capacidades si nosotros mismos no hemos experimentado el valor de escribir, equivocarnos, revisar y transformar nuestras propias ideas.",
        },
        {
          type: "p",
          text: "Por esta razón, consideramos necesario promover estrategias educativas que permitan integrar la inteligencia artificial sin desplazar el proceso de aprendizaje. Una posibilidad consiste en solicitar a los estudiantes que elaboren inicialmente un texto sin asistencia tecnológica, posteriormente consulten a la IA para identificar posibles debilidades y, finalmente, realicen una nueva versión explicando qué sugerencias aceptaron y cuáles decidieron descartar. Asimismo, los docentes pueden evaluar no solamente el producto final, sino también los borradores, las modificaciones, las bitácoras de escritura y las explicaciones orales de los estudiantes. De esta manera, se reconoce el proceso intelectual que existe detrás del texto y se evita confundir una producción bien presentada con un aprendizaje verdaderamente construido.",
        },
      ],
    },
    {
      id: "conclusion",
      kicker: "Conclusión",
      heading: "Nuestra postura",
      blocks: [
        {
          type: "p",
          text: "En definitiva, la inteligencia artificial generativa no debe entenderse como una amenaza inevitable para la escritura ni como una solución automática a las dificultades de aprendizaje. Su valor depende de la manera en que se incorpora a los procesos de producción textual. Como hemos examinado, la escritura siempre ha estado vinculada con herramientas que transforman nuestra forma de pensar; la comparación con la fotografía permite comprender que las nuevas tecnologías pueden abrir otras posibilidades de expresión; y las investigaciones de Noy y Zhang (2023), Bastani et al. (2025) y Kosmyna et al. (2025) muestran que los beneficios de la IA deben analizarse junto con sus posibles consecuencias para el aprendizaje y la autonomía. También reconocimos que las preocupaciones sobre la comprensión, los sesgos, la autoría y la honestidad académica son legítimas, pero pueden abordarse mediante una formación crítica, ética y responsable.",
        },
        {
          type: "p",
          text: "Por todo lo anterior, sostenemos que el verdadero desafío no consiste en decidir si debemos escribir con inteligencia artificial o sin ella, sino en aprender a utilizarla sin renunciar a nuestra capacidad de pensar. La escritura debe seguir siendo un espacio donde podamos construir ideas, cuestionar información, desarrollar una voz propia y asumir la responsabilidad de lo que comunicamos. Por eso, defendemos una secuencia que consideramos fundamental: pensar primero, escribir con nuestras propias ideas y consultar después. La IA puede acompañarnos, orientarnos y ayudarnos a mejorar nuestros textos, pero no debería ocupar el lugar de nuestro razonamiento. Si queremos formar escritores autónomos y futuros docentes capaces de enseñar a pensar, debemos proteger ese esfuerzo intelectual que se encuentra detrás de cada palabra. Porque escribir con inteligencia artificial puede ayudarnos a producir mejores textos, pero aprender a pensar por nosotros mismos es lo que nos permite convertirnos verdaderamente en escritores.",
        },
      ],
    },
  ] as EssaySection[],
} as const;
