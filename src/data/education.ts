import { type Education } from "../types";
import logo_espol from "../assets/images/Espol_Logo_2023.png"
import logo_colegio from "../assets/images/colegio.jpg"

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
    description: "Mejor Estudiante de la Figura Profesional Informática. Excelencia Académica en el año lectivo 2022–2023."
  }
];
