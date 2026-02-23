//Import assets
import { type Principal, type About, type AboutFeature, type Project, type Skill, type Experience, type Education} from "../types";
import avatar from "../assets/images/avatar.jpeg"
import data from "../assets/icons/chart-covariate.svg"
//Principal
import code from "../assets/icons/code.svg"
import research from "../assets/icons/clipboard-search.svg"
import mentoring from "../assets/icons/school.svg"
import rag_edu from "../assets/images/img-projects/rag-edu.jpeg"
import anagrama from "../assets/images/img-projects/anagrama.jpeg"
import analizador from "../assets/images/img-projects/analizador.jpeg"
import tax from "../assets/images/img-projects/tax.jpeg"
import logo_espol from "../assets/images/Espol_Logo_2023.png"
import logo_colegio from "../assets/images/colegio.jpg"

//Objects index.ts
export const principal: Principal = {
    first_name : "Javier",
    last_name: "Gutiérrez",
    title: "Data Analyst & Software Engineer",
    description: 'Estudiante de Ciencias de la Computación en ESPOL, transformando datos crudos en decisiones inteligentes y construyendo soluciones técnicas elegantes.',
    available: true,
    email: "javimacias619@gmail.com",
    github:"https://github.com/SKEIILATT",
    linkedin:"https://www.linkedin.com/in/javaguti",
    avatar:avatar,
    semester: "7mo semester",
    city: "Guayaquil",
    country: "Ecuador",
    university: "ESPOL",
    career: "Ingeniería en Computación"
}

//About_Features
export const about_data: AboutFeature = {
    logoURL: data,
    title: "Data Analytics",
    description: "EDA y visualización con Python, Power BI y MySQL"        
}
export const about_fullstack: AboutFeature = {
    logoURL: code,
    title: "Full-Stack Dev",
    description: "Apps web con React, TypeScript, Django y herramientas modernas."        
}
export const about_research: AboutFeature = {
    logoURL: research,
    title: "Research",
    description: "Investigación basada en datos, aplicada al análisis y comprensión de problemas complejos"        
}
export const about_mentoring: AboutFeature = {
    logoURL: mentoring,
    title: "Mentoría",
    description: "Guía en bootcamps técnicos y desarrollo de materiales"        
}


//About
export const about: About = {
    title: "Transformando datos en decisiones",
    description: " Estudiante de Ciencias de la Computación (7mo semestre) en ESPOL, enfocado en Data Science, Analytics y Desarrollo Web FullStack. Con experiencia en construir soluciones técnicas, análisis exploratorio de datos y visualización de datos.Mentalidad analítica fuerte para transformar datos en decisiones y resolver problemas complejos en entornos dinámicos.",
    about_features: [about_data, about_fullstack, about_mentoring, about_research]
}

export const projects: Project[] = [
    {
        type_project: "EDA con IA",
        title_project: "RAG-EDU",
        description: "Sistema inteligente que combina visualización de datos y consultas con IA para analizar el abandono estudiantil universitario. Utiliza RAG (Retrieval-Augmented Generation) con Ollama, LangChain y ChromaDB.",
        technologies:["React", "TypeScript", "Recharts", "Tailwind CSS", "Laravel", "Flask", "LangChain", "ChromaDB", "Pandas", "NumPy", "Ollama"],
        image:rag_edu,
        github:"https://github.com/SKEIILATT/RAG-EDU",
    },
    {
        type_project: "Lenguaje de bajo nivel",
        title_project: "Anagrama MASM",
        description: "Este proyecto es una utilidad en ensamblador (MASM/TASM, modelo small) que permite determinar si dos cadenas de texto (palabras o frases) son anagramas, ignorando espacios y sin distinguir mayúsculas/minúsculas. Incluye además: 1. Eliminación de espacios antes del análisis.    2. Conversión de letras mayúsculas a minúsculas.  3. Soporte de letras acentuadas (á, é, í, ó, ú) y la letra ñ.                                        4.Bucle principal que permite repetir el proceso hasta que el usuario decida salir.Salidas coloreadas: verde si son anagrama, rojo si no.",
        technologies: ["Ensamblador"],
        image:anagrama,
        github:"https://github.com/SKEIILATT/proyecto-Anagrama?tab=readme-ov-file",
    },
    {
        type_project: "Tipos de análisis de código",
        title_project: "Analizador de Código Go",
        description: "Herramienta web para analizar código escrito en lenguaje Go. Realiza análisis léxico, sintáctico y semántico mostrando tokens, errores y la tabla de símbolos del código.",
        technologies: ["Python", "Flask", "Flask-CORS", "PLY", "React", "TypeScript","CSS3"],
        image:analizador,
        github:"https://github.com/SKEIILATT/ProyectoAnalizador_Final",
    },
    {
        type_project: "Landing Page",
        title_project: "TaxPro Ecuador",
        description: "TaxPro Ecuador es una landing page moderna y responsiva desarrollada para presentar los servicios profesionales de asesoría tributaria de Gina Arteaga en Ecuador. El sitio está enfocado en brindar información clara, confiable y atractiva sobre los servicios contables y tributarios, facilitando el contacto y la conversión de potenciales clientes.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Google Fonts", "Google Maps"],
        image:tax,
        github:"https://github.com/SKEIILATT/taxPro-LP",
    }
]

//Skills
export const skills: Skill[] = [
    { name: "Python", category: "datascience" },
    { name: "Pandas", category: "datascience" },
    { name: "NumPy", category: "datascience" },
    { name: "Power BI", category: "datascience" },
    { name: "MySQL", category: "datascience" },
    { name: "Firebase", category: "datascience" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Java", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Scrum", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Pensamiento Analítico", category: "softskills" },
    { name: "Problem Solving", category: "softskills" },
    { name: "Trabajo en Equipo", category: "softskills" },
    { name: "Comunicación", category: "softskills" },
    { name: "Organización", category: "softskills" },
    { name: "Adaptabilidad", category: "softskills" },
    { name: "Liderazgo", category: "softskills" },
]

//Experience
export const experiences: Experience[] = [
  {
    title_job: "Mentor de programa FullStack Development",
    job_place: "Coding Bootcamp - Espol",
    startDate: "Actualidad",
    bullet_description: ["Mentoría y refuerzo técnico en JavaScript","Diseño de material didáctico, quizzes y busqueda de material educativo del módulo en curso.", "Asesoría en la revisión de código."]
  },
  {
    title_job: "Mentor de Data Driven Decision Specialist",
    job_place: "Coding Bootcamps ESPOL & MINTEL",
    startDate: "Actualidad",
    bullet_description: [
      "Mentoría y refuerzo técnico en Análisis Exploratorio de Datos (EDA) y visualización avanzada en Power BI.",
      "Diseño de material didáctico, talleres y proyectos aplicados en Ciencia de Datos.",
      "Code review en Python (Jupyter Notebooks) y auditoría de dashboards con feedback técnico.",
      "Asesoría en la estructuración de proyectos finales alineados al ciclo de vida del dato."
    ]
  },
  {
    title_job: "Ayudante de Investigación",
    job_place: "ESPOL",
    startDate: "Actualidad",
    bullet_description: [
      "Participación en investigación sobre análisis geoespacial de infraestructura eléctrica urbana.",
      "Contribución al desarrollo de paper científico sobre cortes eléctricos en Ecuador (2024–2025)."
    ]
  },
  {
    title_job: "Ayudante Académico | Fundamentos de Electricidad y Sistemas Digitales",
    job_place: "ESPOL",
    startDate: "09/2025",
    endDate:"02/2026",
    bullet_description: [
      "Apoyo teórico-práctico en laboratorio sobre circuitos y sistemas digitales.",
      "Supervisión de prácticas experimentales y cumplimiento de protocolos de seguridad.",
      "Soporte técnico directo a estudiantes en resolución de problemas eléctricos y lógicos.",
      "Colaboración en material didáctico, calificación y diseño de rúbricas."
    ]
  },
  {
    title_job: "Ayudante Académico | Desarrollo de Aplicaciones Webs y Móviles",
    job_place: "ESPOL",
    startDate: "09/2025",
    endDate: "02/2026",
    bullet_description: [
      "Evaluación técnica de proyectos, tareas y exámenes bajo estándares de programación.",
      "Identificación de áreas de mejora mediante métricas de rendimiento estudiantil.",
      "Diseño de actividades de nivelación académica."
    ]
  },
  {
    title_job: "Ayudante Académico | Redes de Datos",
    job_place: "ESPOL",
    startDate: "05/2025",
    endDate:"09/2025",
    bullet_description: [
      "Supervisión de laboratorio y configuración de dispositivos de red.",
      "Mantenimiento preventivo de hardware y disponibilidad de equipos.",
      "Revisión y calificación de actividades prácticas."
    ]
  },
  {
    title_job: "Auxiliar de Restaurante",
    job_place: "McDonald's",
    startDate: "03/2025",
    endDate:"06/2025",
    bullet_description: [
      "Ejecución de procesos operativos en entornos de alta presión con calidad y tiempos de servicio.",
      "Resolución de incidencias operativas en tiempo real.",
      "Desarrollo de comunicación efectiva, gestión del tiempo y trabajo en equipo."
    ]
  }
];

export const education: Education[] = [
  {
    logoURL: logo_espol,
    level: "Universidad",
    name_school: "Escuela Superior Politécnica del Litoral (ESPOL)",
    startDate: "",
    endDate: "Actualidad",
    city: "Guayaquil, Ecuador",
    description: "Ingeniería en Ciencias de la Computación (7.º semestre)."
  },
  {
    logoURL: logo_colegio,
    level: "Bachillerato",
    name_school: "Unidad Educativa Provincia de Tungurahua",
    endDate: "05/2023",
    city: "Guayaquil, Ecuador",
    description:
      "Mejor Estudiante de la Figura Profesional Informática. Excelencia Académica en el año lectivo 2022–2023."
  }
];