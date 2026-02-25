import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //Estado del menú hamburguesa
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#060b18] flex flex-col w-full ">
      <div className="flex justify-between px-4 py-4">
        <a className="text-[#f97316] font-bold" href="#home">
          JG.
        </a>
        <button
          className="  md:hidden flex flex-col gap-1.5 mt-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className=" h-0.5 w-6 bg-white"></div>
          <div className=" h-0.5 w-6 bg-white"></div>
          <div className=" h-0.5 w-6 bg-white"></div>
        </button>

        <ul className="hidden md:flex gap-6">
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#about"
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#projects"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#skills"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#experience"
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#contact"
            >
              Contáctame
            </a>
          </li>
        </ul>
      </div>
      <ul
        className={`${isOpen ? "flex flex-col" : "hidden"} md:hidden bg-[#0e1525] mt-3 w-full px-4 py-4`}
      >
        <li
          onClick={() => setIsOpen(false)}
          className="mb-2 px-3 py-2  hover:bg-gray-800 rounded-lg "
        >
          <a href="#about">Sobre Mi</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mb-2 px-3 py-2 hover:bg-gray-800 rounded-lg"
        >
          <a href="#projects">Proyectos</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mb-2 px-3 py-2 hover:bg-gray-800 rounded-lg"
        >
          <a href="#skills">Habilidades</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mb-2 px-3 py-2 hover:bg-gray-800 rounded-lg"
        >
          <a href="#experience">Experiencia</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="hover:bg-gray-800 rounded-lg px-3 py-2"
        >
          <a href="#contact">Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};
