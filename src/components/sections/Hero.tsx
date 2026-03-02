import { principal } from "../../data/principal";
import { Mail, Github, Linkedin } from "lucide-react"

export const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 px-4 pb-10 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal-up rounded-2xl border border-[#1c2640] bg-[#0e1525] px-5 py-6">
          <p className="mb-3 text-green-500">
            {principal.available
              ? "Disponible para oportunidades"
              : "No disponible en este momento"}
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">{principal.first_name}</h1>
          <p className="text-4xl font-bold text-[#f97316] sm:text-5xl">
            {principal.last_name}
          </p>
          <p className="mb-3 mt-3 font-semibold text-[#06b6d4]">{principal.title}</p>
          <p className="mb-7 leading-relaxed text-[#7b8ba8]">{principal.description}</p>

          <div className="flex flex-wrap gap-2">
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-[#1c2640] bg-[#f97316] px-3 py-2 font-bold text-black"
              href={`mailto:${principal.email}`}
            >
              <Mail size={16} /> Contactar
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-[#1c2640] px-3 py-2 font-bold transition hover:border-[#f97316] hover:bg-[#f97316]/10"
              href={principal.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> Github
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-[#1c2640] px-3 py-2 font-bold transition hover:border-[#06b6d4] hover:bg-[#06b6d4]/10"
              href={principal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="reveal-up reveal-delay-1 rounded-2xl border border-[#1c2640] bg-[#0e1525] px-5 py-6 text-center">
            <img
              className="mx-auto h-40 w-40 rounded-full object-cover sm:h-44 sm:w-44 pulse-ring"
              src={principal.avatar}
              alt={`Foto de ${principal.first_name} ${principal.last_name}`}
            />
            <p className="mt-4 inline-block rounded-2xl bg-[#06b6d4] px-3 py-1 font-semibold text-black">
              {principal.semester}
            </p>
          </div>

          <div className="reveal-up reveal-delay-2 rounded-2xl border border-[#1c2640] bg-[#0e1525] px-5 py-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="#06b6d4"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <p className="mt-2 font-bold">{principal.city}</p>
            <p className="text-[#7b8ba8]">{principal.country}</p>
            <hr className="my-3 border-gray-600" />
            <p className="font-bold">{principal.university}</p>
            <p className="text-[#7b8ba8]">{principal.career}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
