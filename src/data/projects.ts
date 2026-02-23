import { type Project } from "../types";
import rag_edu from "../assets/images/img-projects/rag-edu.jpeg"
import anagrama from "../assets/images/img-projects/anagrama.jpeg"
import analizador from "../assets/images/img-projects/analizador.jpeg"
import tax from "../assets/images/img-projects/tax.jpeg"

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
