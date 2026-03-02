import { principal } from "../../data/principal";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1c2640] bg-[#0b1323] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-[#7b8ba8] reveal-up sm:flex-row sm:items-center">
        <p>
          {year} {principal.first_name} {principal.last_name}. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a className="transition-colors hover:text-white" href="#home">
            Inicio
          </a>
          <a className="transition-colors hover:text-white" href="#projects">
            Proyectos
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};
