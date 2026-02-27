import { type About, type AboutFeature } from "../types";
import data from "../assets/icons/chart-covariate.svg"
import code from "../assets/icons/code.svg"
import research from "../assets/icons/clipboard-search.svg"
import mentoring from "../assets/icons/school.svg"

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

export const about: About = {
    title: "Transformando datos en decisiones.",
    description: " Estudiante de Ciencias de la Computación (7mo semestre) en ESPOL, enfocado en Data Science, Analytics y Desarrollo Web FullStack. Con experiencia en construir soluciones técnicas, análisis exploratorio de datos y visualización de datos. Mentalidad analítica fuerte para transformar datos en decisiones y resolver problemas complejos en entornos dinámicos.",
    about_features: [about_data, about_fullstack, about_mentoring, about_research]
}