import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 pb-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl reveal-up">
        <span className="rounded-full bg-[#06b6d4]/20 px-3 py-1 font-bold text-[#06b6d4]">
          Portafolio
        </span>
        <h2 className="mb-2 mt-4 text-3xl font-bold">
          Proyectos & <span className="text-[#06b6d4]">Investigacion</span>
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title_project}
              className="reveal-up group relative overflow-hidden rounded-2xl border border-[#1c2640] bg-[#0e1525] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <img
                className="h-64 w-full object-cover opacity-50 transition duration-300 group-hover:scale-105 group-hover:opacity-35"
                src={project.image}
                alt={`Imagen del proyecto ${project.title_project}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 font-bold text-[#eceef1]">
                <span className="mb-2 inline-block w-fit rounded-full bg-[#06b6d4]/30 px-2 py-1 text-xs">
                  {project.type_project}
                </span>
                <h3>{project.title_project}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-95">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    className="rounded-full border border-gray-600 px-3 py-1 text-xs transition hover:bg-[#06b6d4]/30"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </a>
                  {project.demo ? (
                    <a
                      className="rounded-full border border-gray-600 px-3 py-1 text-xs transition hover:bg-[#06b6d4]/30"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      className="rounded-full bg-gray-400/20 px-2 py-1 text-xs"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 
