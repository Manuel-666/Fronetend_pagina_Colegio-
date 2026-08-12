// ============================================================
// Contenido de la Modalidad Industrial
// Fuente: documento entregado por el usuario. Editar aquí,
// nunca dentro de los componentes.
// ============================================================

export const inicio = {
  titulo: 'Modalidad Industrial',
  descripcion:
    'La modalidad Industrial es una formación técnica que desarrolla habilidades para diseñar, construir, instalar y mantener sistemas tecnológicos mediante el uso de herramientas, equipos y procesos industriales. Los estudiantes combinan conocimientos teóricos con prácticas en talleres, preparándose para continuar estudios superiores o incorporarse al mundo laboral.',
};

export const queEs = {
  parrafos: [
    'La modalidad Industrial es un programa de educación técnica que busca desarrollar competencias en áreas relacionadas con la industria, la tecnología y los procesos productivos.',
    'Durante la formación, los estudiantes aprenden mediante actividades prácticas en talleres especializados, donde aplican conocimientos de matemáticas, física, dibujo técnico y tecnología para resolver problemas reales.',
    'Su objetivo principal es formar personas capaces de trabajar con responsabilidad, seguridad y creatividad en diferentes entornos tecnológicos e industriales.',
  ],
};

export const objetivos = [
  'Desarrollar habilidades técnicas y tecnológicas.',
  'Fomentar el pensamiento lógico y la resolución de problemas.',
  'Promover el trabajo en equipo.',
  'Enseñar el uso correcto de herramientas y equipos tecnológicos.',
  'Incentivar la innovación y el emprendimiento.',
  'Preparar a los estudiantes para la educación superior.',
  'Formar profesionales responsables y comprometidos con la seguridad.',
];

export const areasEstudio = [
  {
    id: 'dibujo-tecnico',
    nombre: 'Dibujo Técnico',
    temas: [
      'Interpretación de planos.',
      'Escalas.',
      'Diseño de piezas.',
      'Vistas y cortes.',
      'Lectura de planos industriales.',
    ],
  },
  {
    id: 'electricidad',
    nombre: 'Electricidad',
    temas: [
      'Circuitos eléctricos.',
      'Instalaciones residenciales.',
      'Medición de voltaje, corriente y resistencia.',
      'Uso del multímetro.',
      'Normas de seguridad eléctrica.',
    ],
  },
  {
    id: 'electronica',
    nombre: 'Electrónica',
    temas: [
      'Resistencias.',
      'Capacitores.',
      'Diodos.',
      'Transistores.',
      'Sensores.',
      'Microcontroladores.',
      'Soldadura de componentes electrónicos en placas de circuito (solo como técnica de ensamblaje electrónico).',
      'Diseño de circuitos electrónicos.',
    ],
  },
  {
    id: 'automatizacion',
    nombre: 'Automatización',
    temas: [
      'Sensores.',
      'Actuadores.',
      'PLC (Controladores Lógicos Programables).',
      'Automatización de procesos.',
      'Sistemas de control.',
      'Programación básica de equipos industriales.',
    ],
  },
  {
    id: 'informatica-industrial',
    nombre: 'Informática Industrial',
    temas: [
      'Diseño asistido por computador (CAD).',
      'Programación básica.',
      'Simulación de procesos.',
      'Modelado 3D.',
      'Diseño de proyectos tecnológicos.',
    ],
  },
];

export const talleres = [
  {
    id: 'taller-electricidad',
    nombre: 'Taller de Electricidad',
    descripcion:
      'Los estudiantes realizan instalaciones eléctricas, mediciones, pruebas de funcionamiento y montajes eléctricos siguiendo las normas de seguridad.',
  },
  {
    id: 'taller-electronica',
    nombre: 'Taller de Electrónica',
    descripcion:
      'Se construyen circuitos electrónicos, se ensamblan componentes, se realizan mediciones y se desarrollan proyectos tecnológicos utilizando diferentes dispositivos electrónicos.',
  },
  {
    id: 'taller-automatizacion',
    nombre: 'Taller de Automatización',
    descripcion:
      'Los estudiantes aprenden a controlar procesos mediante sensores, actuadores y controladores programables (PLC), desarrollando sistemas automáticos.',
  },
  {
    id: 'taller-informatica',
    nombre: 'Taller de Informática Industrial',
    descripcion:
      'Se desarrollan proyectos utilizando software de diseño, simulación y programación, fortaleciendo las competencias digitales aplicadas a la industria.',
  },
];

export const competencias = [
  'Trabajo en equipo',
  'Liderazgo',
  'Comunicación',
  'Creatividad',
  'Innovación',
  'Pensamiento crítico',
  'Resolución de problemas',
  'Responsabilidad',
  'Seguridad industrial',
  'Organización',
  'Gestión del tiempo',
  'Ética profesional',
  'Adaptación a nuevas tecnologías',
];

export const herramientas = [
  {
    categoria: 'Herramientas manuales',
    items: [
      'Destornilladores.',
      'Alicates.',
      'Pinzas.',
      'Llaves.',
      'Pelacables.',
      'Cautín para electrónica.',
    ],
  },
  {
    categoria: 'Instrumentos de medición',
    items: [
      'Multímetro.',
      'Flexómetro.',
      'Escuadra.',
      'Calibrador Vernier.',
      'Probador de continuidad.',
    ],
  },
  {
    categoria: 'Equipos tecnológicos',
    items: [
      'Computadores.',
      'PLC.',
      'Fuentes de alimentación.',
      'Osciloscopio.',
      'Protoboard.',
      'Estaciones de soldadura electrónica.',
      'Impresora 3D (si está disponible).',
      'Kits de robótica.',
    ],
  },
];

export const normasSeguridad = [
  'Uso obligatorio de gafas de seguridad cuando sea necesario.',
  'Mantener limpio y organizado el puesto de trabajo.',
  'Revisar las herramientas antes de utilizarlas.',
  'No manipular equipos eléctricos energizados sin autorización.',
  'Respetar la señalización del taller.',
  'Utilizar correctamente los elementos de protección personal.',
  'Seguir las instrucciones del docente.',
  'Reportar cualquier accidente o anomalía.',
];

export const proyectos = [
  {
    nombre: 'Robot seguidor de línea',
    resumen: 'Un robot que sigue una línea negra en el piso usando sensores infrarrojos.',
    pasos: [
      'Arma el chasis con las ruedas y motores.',
      'Conecta los sensores infrarrojos en la parte frontal, mirando hacia el piso.',
      'Programa el microcontrolador para leer los sensores y mover los motores según la posición de la línea.',
      'Ajusta la velocidad y sensibilidad probando sobre la pista.',
    ],
  },
  {
    nombre: 'Sistema de riego automático',
    resumen: 'Riega las plantas automáticamente según la humedad del suelo.',
    pasos: [
      'Conecta un sensor de humedad de suelo al microcontrolador.',
      'Conecta una electroválvula o bomba de agua a través de un relé.',
      'Programa el sistema para activar el riego cuando la humedad baje de un umbral.',
      'Prueba y calibra el umbral según el tipo de planta.',
    ],
  },
  {
    nombre: 'Instalación eléctrica de una vivienda',
    resumen: 'Simula el cableado eléctrico básico de una casa en una maqueta o tablero.',
    pasos: [
      'Diseña el plano eléctrico: tomacorrientes, interruptores y puntos de luz.',
      'Instala el tablero de distribución con sus protecciones (breakers).',
      'Cablea los circuitos siguiendo el plano y las normas de seguridad.',
      'Verifica continuidad y polaridad con el multímetro antes de energizar.',
    ],
  },
  {
    nombre: 'Sistema de alarma',
    resumen: 'Detecta movimiento o apertura de puertas y activa una alerta sonora.',
    pasos: [
      'Conecta un sensor (magnético para puertas o PIR para movimiento).',
      'Conecta un buzzer o sirena como salida de alerta.',
      'Programa el microcontrolador para activar la alarma al detectar la señal del sensor.',
      'Agrega un botón o clave para desactivar la alarma.',
    ],
  },
  {
    nombre: 'Semáforo inteligente',
    resumen: 'Controla el ciclo de luces de un semáforo, ajustando tiempos según tránsito.',
    pasos: [
      'Monta 3 LEDs (rojo, amarillo, verde) por cada vía.',
      'Programa la secuencia básica de tiempos entre luces.',
      'Agrega sensores de tráfico (opcional) para ajustar los tiempos dinámicamente.',
      'Prueba la sincronización entre las distintas vías.',
    ],
  },
  {
    nombre: 'Domótica básica',
    resumen: 'Controla luces o electrodomésticos de una casa a distancia.',
    pasos: [
      'Conecta relés a los dispositivos que quieres controlar (luces, ventilador).',
      'Conecta un módulo de comunicación (bluetooth o wifi) al microcontrolador.',
      'Programa una app o interfaz simple para enviar comandos de encendido/apagado.',
      'Prueba el control remoto y ajusta los tiempos de respuesta.',
    ],
  },
  {
    nombre: 'Control automático de iluminación',
    resumen: 'Enciende o apaga luces automáticamente según la luz ambiente.',
    pasos: [
      'Conecta un sensor de luz (fotorresistencia o LDR).',
      'Conecta la salida a un relé que controle la lámpara.',
      'Programa el umbral de luz para encender o apagar automáticamente.',
      'Calibra el sensor según el ambiente donde se instale.',
    ],
  },
  {
    nombre: 'Estación meteorológica',
    resumen: 'Mide y muestra variables ambientales como temperatura y humedad.',
    pasos: [
      'Conecta sensores de temperatura, humedad y, opcionalmente, presión.',
      'Conecta una pantalla LCD u OLED para mostrar los datos.',
      'Programa la lectura periódica de los sensores.',
      'Opcional: guarda o transmite los datos para llevar un historial.',
    ],
  },
  {
    nombre: 'Cargador solar',
    resumen: 'Convierte energía solar en energía eléctrica para cargar baterías pequeñas.',
    pasos: [
      'Conecta el panel solar a un circuito controlador de carga.',
      'Conecta la batería a cargar al controlador.',
      'Verifica los voltajes con el multímetro en cada etapa.',
      'Prueba el sistema bajo luz solar directa y mide el tiempo de carga.',
    ],
  },
  {
    nombre: 'Proyectos con Arduino',
    resumen: 'Proyecto libre usando la plataforma Arduino como base.',
    pasos: [
      'Define qué quieres construir (sensor, actuador, o una combinación).',
      'Arma el circuito en protoboard antes de soldar nada.',
      'Escribe y carga el programa (sketch) en el Arduino.',
      'Prueba, depura y ajusta el circuito y el código.',
    ],
  },
  {
    nombre: 'Proyectos con PLC',
    resumen: 'Automatiza un proceso simple usando un Controlador Lógico Programable.',
    pasos: [
      'Define la secuencia de entradas y salidas del proceso.',
      'Conecta sensores y actuadores a las entradas/salidas del PLC.',
      'Programa la lógica (escalera u otro lenguaje) según la secuencia.',
      'Simula y prueba el proceso paso a paso antes de la ejecución final.',
    ],
  },
  {
    nombre: 'Diseño de circuitos electrónicos',
    resumen: 'Diseña y arma un circuito electrónico funcional desde cero.',
    pasos: [
      'Define la función del circuito y dibuja el diagrama esquemático.',
      'Selecciona los componentes (resistencias, transistores, etc.).',
      'Arma el circuito en protoboard y verifica su funcionamiento.',
      'Pasa el diseño final a una placa (PCB o baquelita) si aplica.',
    ],
  },
  {
    nombre: 'Automatización de procesos',
    resumen: 'Convierte un proceso manual en uno automático usando sensores y control.',
    pasos: [
      'Identifica el proceso manual que quieres automatizar.',
      'Define qué sensores y actuadores necesitas para reemplazar la acción manual.',
      'Programa la lógica de control (con microcontrolador o PLC).',
      'Prueba el proceso automatizado y compáralo con el proceso manual original.',
    ],
  },
];
export const perfilEstudiante = [
  'Ser responsable.',
  'Tener interés por la tecnología.',
  'Disfrutar del aprendizaje práctico.',
  'Ser creativo.',
  'Resolver problemas.',
  'Trabajar en equipo.',
  'Ser disciplinado.',
  'Tener pensamiento lógico.',
  'Adaptarse a nuevas tecnologías.',
];

export const campoLaboral = {
  cargos: [
    'Auxiliar de mantenimiento eléctrico.',
    'Técnico en electricidad.',
    'Auxiliar de electrónica.',
    'Auxiliar de automatización.',
    'Instalador eléctrico.',
    'Operador de sistemas automatizados.',
    'Auxiliar en soporte tecnológico.',
    'Asistente de producción industrial.',
    'Auxiliar en control de procesos.',
  ],
  carreras: [
    'Ingeniería Eléctrica.',
    'Ingeniería Electrónica.',
    'Ingeniería Mecatrónica.',
    'Ingeniería Industrial.',
    'Ingeniería de Sistemas.',
    'Tecnología en Automatización.',
    'Tecnología en Electricidad.',
    'Tecnología en Electrónica.',
  ],
};

export const galeriaCategorias = [
  'Talleres de electricidad.',
  'Laboratorios de electrónica.',
  'Prácticas de automatización.',
  'Estudiantes desarrollando proyectos.',
  'Ferias de ciencia y tecnología.',
  'Equipos e instrumentos.',
  'Competencias académicas.',
  'Exposiciones de proyectos tecnológicos.',
];

export const faq = [
  {
    id: 'faq-0',
    pregunta: '¿Qué requisitos hay para ingresar?',
    respuesta:
      'Haber aprobado el grado anterior, presentar los documentos de identidad y cumplir con los trámites de matrícula del colegio.',
  },
  {
    id: 'faq-1',
    pregunta: '¿Se necesitan conocimientos previos?',
    respuesta:
      'No se requieren conocimientos avanzados; con lo básico de matemáticas, ciencias y tecnología que aprendieron en grados anteriores como decimo.',
  },
  {
    id: 'faq-2',
    pregunta: '¿Qué implementos de seguridad son obligatorios?',
    respuesta:
      'Casco, gafas de protección, guantes adecuados, calzado de seguridad y/o ropa de trabajo, según la actividad que realizamos.',
  },
  {
    id: 'faq-3',
    pregunta: '¿Qué proyectos se desarrollan durante la formación?',
    respuesta:
      'Elaboramos maquetas, hacemos reparaciones sencillas, construcciones, trabajos de mecánica, electricidad básica y pequeños procesos de fabricación, montaje y transformación de materiales.',
  },
  {
    id: 'faq-4',
    pregunta: '¿Qué oportunidades existen después de graduarse?',
    respuesta:
      'Podemos trabajar en talleres, fábricas o áreas de mantenimiento; seguir estudiando carreras técnicas o universitarias como ingeniería; o crear nuestro propio emprendimiento.',
  },
  {
    id: 'faq-5',
    pregunta: '¿Se realizan prácticas en laboratorio?',
    respuesta:
      'Sí, hacemos prácticas constantes en talleres y laboratorios: aprendemos a usar herramientas y máquinas de forma segura, probamos materiales, armamos circuitos, hacemos pruebas de funcionamiento, ensamblamos piezas y aplicamos paso a paso todo lo visto en clase.',
  },
  {
    id: 'faq-6',
    pregunta: '¿Qué tecnologías se utilizan durante la formación?',
    respuesta:
      'Herramientas manuales y eléctricas, máquinas básicas, instrumentos de medición, equipos de electricidad y mecánica, además de programas sencillos de diseño; torno, soldador, calibrador; metales, cables; placas como Arduino, sensores, motores, circuitos; y programas básicos de diseño y programación básica.',
  },
];

export const testimoniosInfo = {
  nota:
    'Incluye experiencias de estudiantes, egresados y docentes sobre la modalidad, destacando los conocimientos adquiridos, los proyectos realizados y las oportunidades que ha brindado la formación técnica.',
  // Placeholder hasta tener testimonios reales.
  items: [],
};

export const contacto = {
  direccion: 'Transversal 9 # 3N - 02, Popayán, Cauca, Colombia',
  telefono: '(123)4567890 ',
  correo: 'modalidadindustrial@inempopayan.edu.co',
  horario: 'Lunes a viernes, 7:00 a.m. – 3:00 p.m.',
};

// Inicio va suelto (siempre visible). El resto se agrupa en categorías
// que se despliegan al hacer clic, para que el sidebar no se vea saturado.
export const inicioNav = { to: '/', label: 'Inicio' };

export const navegacion = [
  {
    id: 'la-modalidad',
    label: 'La modalidad',
    items: [
      { to: '/que-es', label: 'Qué es' },
      { to: '/objetivos', label: 'Objetivos' },
      { to: '/perfil', label: 'Perfil del estudiante' },
    ],
  },
  {
    id: 'formacion',
    label: 'Formación',
    items: [
      { to: '/areas', label: 'Áreas' },
      { to: '/talleres', label: 'Talleres' },
      { to: '/competencias', label: 'Competencias' },
      { to: '/herramientas', label: 'Herramientas' },
      { to: '/seguridad', label: 'Seguridad' },
    ],
  },
  {
    id: 'resultados',
    label: 'Resultados',
    items: [
      { to: '/proyectos', label: 'Proyectos' },
      { to: '/campo-laboral', label: 'Campo laboral' },
      { to: '/galeria', label: 'Galería' },
    ],
  },
  {
    id: 'mas-info',
    label: 'Más información',
    items: [
      { to: '/faq', label: 'Preguntas' },
      { to: '/testimonios', label: 'Testimonios' },
      { to: '/contacto', label: 'Contacto' },
    ],
  },
];