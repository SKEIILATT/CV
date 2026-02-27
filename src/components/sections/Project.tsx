import { projects } from "../../data/projects";

export const Projects = () => {
    return (
        <section id="projects" className="mt-10">
            <span className="bg-[#06b6d4]/60 text-[#06b6d4] font-bold  p-2 rounded-full"> Portafolio</span>
            <h2 className="text-3xl mt-3 mb-2 font-bold">
                Proyectos & <span className="text-[#06b6d4]">Investigación</span>
            </h2>
            {projects.map((project) => (

                <article key={project.title_project} className=" group relative overflow-hidden h-80">
                    <img className="absolute inset-0 w-full h-full object-cover" src={project.image} alt="img-project" />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 font-bold flex flex-col justify-end p-4 text-white">
                        <span className="text-xs bg-[#06b6d4]/80 px-2 py-1 rounded-full mb-2 inline-block"> {project.type_project} </span>
                        <h2> {project.title_project} </h2>
                        <a className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" href={project.github}>Repositorio</a>
                        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3" > {project.description} </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.map((tech) => (
                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full mr-1" key={tech} > {tech} </span>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
} 