import { type Project } from "../types";
import rag_edu from "../assets/images/img-projects/rag-edu.jpeg"
import anagrama from "../assets/images/img-projects/anagrama.jpeg"
import analizador from "../assets/images/img-projects/analizador.jpeg"
import tax from "../assets/images/img-projects/tax.jpeg"

export const projects: Project[] = [
    {
        type_project: "EDA con IA",
        title_project: "RAG-EDU",
        description: "Sistema inteligente para analizar abandono estudiantil mediante visualización de datos y consultas con IA usando RAG.",
        technologies:["React", "TypeScript", "Recharts", "Tailwind CSS", "Laravel", "Flask", "LangChain", "ChromaDB", "Pandas", "NumPy", "Ollama"],
        image:rag_edu,
        github:"https://github.com/SKEIILATT/RAG-EDU",
    },
    {
        type_project: "Lenguaje de bajo nivel",
        title_project: "Anagrama MASM",
        description: "Utilidad en ensamblador (MASM/TASM) que determina si dos cadenas son anagramas.",
        technologies: ["Ensamblador"],
        image:anagrama,
        github:"https://github.com/SKEIILATT/proyecto-Anagrama?tab=readme-ov-file",
    },
    {
        type_project: "Tipos de análisis de código",
        title_project: "Analizador de Código Go",
        description: "Herramienta web que realiza análisis léxico, sintáctico y semántico de código Go, mostrando tokens, errores y tabla de símbolos.",
        technologies: ["Python", "Flask", "Flask-CORS", "PLY", "React", "TypeScript","CSS3"],
        image:analizador,
        github:"https://github.com/SKEIILATT/ProyectoAnalizador_Final",
    },
    {
        type_project: "Landing Page",
        title_project: "TaxPro Ecuador",
        description: "Landing page moderna y responsiva para servicios de asesoría tributaria en Ecuador, enfocada en claridad informativa y captación de clientes.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Google Fonts", "Google Maps"],
        image:tax,
        github:"https://github.com/SKEIILATT/taxPro-LP",
    }
]