import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#about", label: "Sobre Mi" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Educación" },
    { href: "#contact", label: "Contáctame" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#1c2640] bg-[#060b18]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a className="ml-1 text-lg font-bold text-[#f97316]" href="#home">
            JG.
          </a>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
          </button>

          <ul className="hidden items-center gap-6 text-sm font-medium text-[#7b8ba8] md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="text-gray-300 transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className={`md:hidden ${isOpen ? "mb-4 flex flex-col rounded-xl border border-[#1c2640] bg-[#0e1525] p-2" : "hidden"}`}
        >
          {links.map((link) => (
            <li key={`mobile-${link.href}`}>
              <a
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
