import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { principal } from "../../data/principal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 pb-14 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl reveal-up rounded-2xl border border-[#1c2640] bg-[#0e1525] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="reveal-up reveal-delay-1">
            <span className="rounded-full bg-[#f97316]/20 px-3 py-1 font-bold text-[#f97316]">
              Contáctame
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Hablemos de tu <span className="text-[#f97316]">próximo proyecto</span>
            </h2>

            <p className="mt-3 max-w-xl leading-relaxed text-[#7b8ba8]">
              Estoy abierto a colaborar en proyectos de desarrollo, analítica de
              datos o investigación aplicada. Si tienes una idea o una oportunidad,
              escríbeme.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-[#1c2640] bg-[#060b18] px-4 py-3 font-semibold transition hover:border-[#f97316] hover:bg-[#f97316]/10"
                href={`mailto:${principal.email}`}
              >
                <Mail size={16} />
                {principal.email}
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-[#1c2640] bg-[#060b18] px-4 py-3 font-semibold">
                <MapPin size={16} />
                {principal.city}, {principal.country}
              </div>

              <a
                className="inline-flex items-center gap-2 rounded-xl border border-[#1c2640] bg-[#060b18] px-4 py-3 font-semibold transition hover:border-[#06b6d4] hover:bg-[#06b6d4]/10"
                href={principal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-xl border border-[#1c2640] bg-[#060b18] px-4 py-3 font-semibold transition hover:border-[#22c55e] hover:bg-[#22c55e]/10"
                href={principal.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          <form
            className="reveal-up reveal-delay-2 rounded-2xl border border-[#1c2640] bg-[#060b18] p-4"
            action={`mailto:${principal.email}`}
            method="post"
            encType="text/plain"
          >
            <label className="mb-2 block text-sm font-semibold text-[#c7cfde]" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mb-4 w-full rounded-xl border border-[#1c2640] bg-[#0e1525] px-3 py-2 text-sm outline-none transition focus:border-[#f97316]"
              placeholder="Tu nombre"
              required
            />

            <label className="mb-2 block text-sm font-semibold text-[#c7cfde]" htmlFor="email">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mb-4 w-full rounded-xl border border-[#1c2640] bg-[#0e1525] px-3 py-2 text-sm outline-none transition focus:border-[#06b6d4]"
              placeholder="tuemail@email.com"
              required
            />

            <label className="mb-2 block text-sm font-semibold text-[#c7cfde]" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-xl border border-[#1c2640] bg-[#0e1525] px-3 py-2 text-sm outline-none transition focus:border-[#22c55e]"
              placeholder="Cuéntame en qué te puedo ayudar..."
              required
            />

            <button
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#f97316] px-4 py-2 font-bold text-black transition hover:bg-[#fb923c]"
              type="submit"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
