const LICEO_DATA = {
  // Información General
  info: {
    nombre: "Liceo Técnico Profesional Chiloé",
    modalidad: "Educación de Personas Jóvenes y Adultas (EPJA) - Modalidad 2x1",
    ciudad: "Castro",
    region: "Región de Los Lagos, Chiloé, Chile",
    direccion: "Luis Espinoza #348, Castro",
    telefono: "65 2 531038",
    whatsapp: "+56 9 93155447",
    whatsappLink: "https://wa.me/56993155447",
    email: "liceotecnicochiloe@gmail.com",
    horario: "Lunes a Viernes: Jornada Mañana (08:30 - 13:30) y Jornada Tarde/Vespertina (18:00 - 22:30)",
    rbd: "22345-6"
  },

  // Niveles Educativos Modalidad 2x1
  niveles: [
    {
      id: "primer-nivel",
      nombre: "1° Nivel Medio",
      equivalencia: "1° y 2° Medio",
      duracion: "1 Año Lectivo",
      tipo: "Formación General y Nivelación",
      descripcion: "Permite cursar y aprobar los contenidos fundamentales correspondientes a 1° y 2° Medio en un solo año lectivo. Entrega una base sólida en comunicación, razonamiento lógico-matemático, ciencias y desarrollo socioemocional, preparando al estudiante para ingresar a la especialidad técnica.",
      requisitos: [
        "Certificado original de 8° Año Básico rendido y aprobado.",
        "Fotocopia legible de Cédula de Identidad por ambos lados.",
        "Edad reglamentaria para educación de adultos (17 años cumplidos o causales de excepción según normativa MINEDUC).",
        "Certificado de nacimiento para matrícula."
      ],
      malla: [
        "Lenguaje y Comunicación",
        "Matemáticas",
        "Ciencias Naturales",
        "Estudios Sociales e Historia de Chile",
        "Idioma Extranjero: Inglés Comunicativo",
        "Taller de Desarrollo Personal y Orientación Vocacional"
      ]
    },
    {
      id: "segundo-nivel",
      nombre: "2° Nivel Medio",
      equivalencia: "3° y 4° Medio",
      duracion: "1 Año Lectivo + Práctica Profesional",
      tipo: "Formación Técnico-Profesional de Especialidad",
      descripcion: "Permite cursar y aprobar los contenidos de 3° y 4° Medio en un solo año, adquiriendo las competencias teóricas y prácticas de la especialidad técnica en Atención de Párvulos para obtener la Licencia de Enseñanza Media y el Título de Técnico de Nivel Medio.",
      requisitos: [
        "Certificado de 2° Medio aprobado (o certificado de aprobación del 1° Nivel Medio de Adultos).",
        "Fotocopia de Cédula de Identidad vigente.",
        "Certificado de nacimiento para matrícula.",
        "Entrevista vocacional formativa."
      ],
      malla: [
        "Planificación y Evaluación de Actividades con Párvulos",
        "Salud, Higiene, Nutrición y Primeros Auxilios del Párvulo",
        "Expresión Musical, Plástica y Corporal en la Niñez",
        "Literatura Infantil, Fomento Lector y Expresión Oral",
        "Diseño y Elaboración de Material Didáctico Contextualizado",
        "El Juego y la Recreación en el Aprendizaje Infantil",
        "Relación Familia, Escuela y Comunidad en el Contexto Chilote",
        "Emprendimiento, Ética y Legislación Laboral de la Infancia"
      ]
    }
  ],

  // Especialidad Técnico-Profesional Única
  especialidad: {
    id: "atencion-parvulos",
    nombre: "Técnico de Nivel Medio en Atención de Párvulos",
    mencion: "Educación Inicial, Cuidado y Estimulación Temprana",
    icono: "🧸",
    color: "#e11d48",
    duracion: "Cursado en 2° Nivel Medio (3° y 4° Medio) + Práctica Profesional (450 hrs)",
    tituloOtorgado: "Técnico de Nivel Medio en Atención de Párvulos (Reconocimiento Oficial MINEDUC)",
    descripcionCorta: "Formación especializada para el cuidado, estimulación temprana y desarrollo integral de niños y niñas de 0 a 6 años en salas cuna, jardines infantiles y colegios del archipiélago.",
    perfilEgreso: "El/la Técnico de Nivel Medio en Atención de Párvulos de nuestro liceo cuenta con las competencias pedagógicas, éticas y afectivas para colaborar activamente con el equipo pedagógico en el diseño, ejecución y evaluación de experiencias de aprendizaje lúdicas. Está capacitado/a para atender requerimientos de higiene, salud, primeros auxilios y nutrición de los párvulos, confeccionar material didáctico adaptado a la identidad cultural de Chiloé y mantener una relación constructiva con las familias y la comunidad educativa.",
    campoLaboral: "Salas cuna y jardines infantiles de la red pública y privada (JUNJI, Fundación Integra, Servicios Locales / VTF municipales), escuelas básicas en niveles de transición (prekínder y kínder), escuelas especiales y de lenguaje, centros de recreación infantil, proyectos de estimulación temprana y cuidado independiente.",
    conveniosPracticas: "Convenios de colaboración y prácticas con redes de salas cuna y jardines infantiles de Castro, Dalcahue, Chonchi y la provincia de Chiloé."
  },

  // Noticias y Comunicados Institucionales
  noticias: [
    {
      id: 1,
      titulo: "Abiertas las Matrículas 2x1: Completa tu Enseñanza Media y obtén Título Técnico",
      categoria: "comunicado",
      categoriaLabel: "Admisión & Matrícula",
      fecha: "18 Sep 2026",
      resumen: "Inscríbete de forma directa y 100% gratuita en 1° Nivel (1° y 2° Medio) o 2° Nivel (3° y 4° Medio con especialidad en Atención de Párvulos). Horarios flexibles para personas que trabajan o cuidan familia.",
      imagen: "assets/images/noticia-admision.svg",
      destacada: true
    },
    {
      id: 2,
      titulo: "Estudiantes de Atención de Párvulos realizan muestra de material didáctico con identidad chilota",
      categoria: "academico",
      categoriaLabel: "Área Técnica Parvularia",
      fecha: "12 Sep 2026",
      resumen: "Alumnas del 2° Nivel presentaron juguetes sensoriales, libros de texturas y juegos de estimulación elaborados con lana chilota, maderas nobles y elementos reciclados para salas cuna de Castro.",
      imagen: "assets/images/noticia-parvulos.svg",
      destacada: true
    },
    {
      id: 3,
      titulo: "Convenio con Jardines Infantiles de Castro fortalece prácticas profesionales de párvulos",
      categoria: "academico",
      categoriaLabel: "Prácticas y Titulación",
      fecha: "04 Sep 2026",
      resumen: "Nuevas alianzas con establecimientos JUNJI e Integra asegurarán centros de práctica protegidos y con acompañamiento docente para las futuras técnicas de nivel medio.",
      imagen: "assets/images/noticia-practica.svg",
      destacada: false
    },
    {
      id: 4,
      titulo: "Taller práctico de Primeros Auxilios Infantiles y Maniobras de Reanimación",
      categoria: "academico",
      categoriaLabel: "Capacitación Práctica",
      fecha: "26 Ago 2026",
      resumen: "En conjunto con personal de salud local, las estudiantes se certificaron en protocolos de emergencia, atención de atragantamiento infantil y prevención de riesgos en salas cuna.",
      imagen: "assets/images/noticia-primeros-auxilios.svg",
      destacada: false
    },
    {
      id: 5,
      titulo: "Encuentro de la Comunidad Educativa 2x1 y Entrega de Informes de Avance",
      categoria: "comunicado",
      categoriaLabel: "Comunidad Escolar",
      fecha: "15 Ago 2026",
      resumen: "Jornada formativa para coordinar tutorías pedagógicas, beneficios estudiantiles (TNE Adulto y JUNAEB) y el cierre semestral de evaluaciones.",
      imagen: "assets/images/noticia-reunion.svg",
      destacada: false
    }
  ],

  // Preguntas Frecuentes (Modalidad 2x1 y Admisión)
  faqs: [
    {
      pregunta: "¿Qué significa que el liceo sea modalidad 2x1?",
      respuesta: "La modalidad 2x1 (Educación de Personas Jóvenes y Adultas - EPJA) permite cursar dos años de enseñanza media en un solo año calendario. Nuestro liceo cuenta con dos niveles: el 1° Nivel (equivale a 1° y 2° Medio) y el 2° Nivel (equivale a 3° y 4° Medio junto con la especialidad técnica)."
    },
    {
      pregunta: "¿Qué título obtengo al finalizar el 2° Nivel?",
      respuesta: "Al aprobar el 2° Nivel obtienes tu Licencia de Educación Media científico-humanista/técnica, y al completar tu práctica profesional de 450 horas recibes el Título de Técnico de Nivel Medio en Atención de Párvulos, con validez nacional oficial otorgado por el Ministerio de Educación (MINEDUC)."
    },
    {
      pregunta: "¿Cómo me matriculo? ¿Debo postular por el SAE?",
      respuesta: "En la Educación de Adultos (EPJA / 2x1) la matrícula es DIRECTA en nuestro establecimiento en Luis Espinoza #348, Castro. No necesitas esperar los periodos regulares del SAE escolar tradicional. Solo debes presentar tu certificado de estudios del último curso aprobado y tu cédula de identidad."
    },
    {
      pregunta: "¿El liceo es gratuito y cuenta con pase escolar?",
      respuesta: "Sí, nuestro establecimiento es 100% gratuito, sin cobro de matrícula ni mensualidades. Además, todos nuestros estudiantes regulares tienen derecho a tramitar la Tarjeta Nacional Estudiantil (TNE - Pase Escolar Adulto) para transporte público con tarifa rebajada y a los programas de apoyo de JUNAEB."
    },
    {
      pregunta: "¿Puedo estudiar si trabajo o tengo hijos que cuidar?",
      respuesta: "¡Por supuesto! Nuestro modelo educativo 2x1 está diseñado especialmente para personas jóvenes y adultas que trabajan o están a cargo de sus familias. Ofrecemos horarios organizados, flexibilidad justificada ante turnos laborales y un equipo psicosocial que acompaña tu trayectoria educativa para que logres tu meta."
    },
    {
      pregunta: "¿Cuáles son los requisitos de edad para ingresar?",
      respuesta: "Para 1° Nivel (1° y 2° Medio) se requiere tener 17 años cumplidos al inicio del año escolar y certificado de 8° básico aprobado. Para 2° Nivel (3° y 4° Medio) se requiere tener 18 años cumplidos (o 1° nivel de adultos aprobado) y certificado de 2° Medio aprobado. Consulta en secretaría por situaciones especiales contempladas en el decreto."
    }
  ]
};

// Compatibilidad por si algún script antiguo busca la propiedad "especialidades"
LICEO_DATA.especialidades = [
  {
    id: LICEO_DATA.especialidad.id,
    nombre: "Atención de Párvulos",
    mencion: LICEO_DATA.especialidad.mencion,
    icono: LICEO_DATA.especialidad.icono,
    color: LICEO_DATA.especialidad.color,
    descripcionCorta: LICEO_DATA.especialidad.descripcionCorta,
    perfilEgreso: LICEO_DATA.especialidad.perfilEgreso,
    campoLaboral: LICEO_DATA.especialidad.campoLaboral,
    duracion: LICEO_DATA.especialidad.duracion,
    malla: {
      primerNivel: LICEO_DATA.niveles[0].malla,
      segundoNivel: LICEO_DATA.especialidad.malla ? LICEO_DATA.especialidad.malla.segundoNivel : LICEO_DATA.niveles[1].malla
    }
  }
];

// Exportar globalmente
window.LICEO_DATA = LICEO_DATA;
