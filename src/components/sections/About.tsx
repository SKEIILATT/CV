import { about } from "../../data/about";

export const About = () =>{
  const colors = ["bg-[#f97316]", "bg-[#30acce]", "bg-[#3d35ce]", "bg-[#6bce80]"];

  return(
    <section
      id="about"
      className="scroll-mt-24 px-4 pb-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal-up">
          <span className="rounded-full bg-[#f97316]/20 px-3 py-1 font-bold text-[#f97316]">
            Sobre Mi
          </span>
          <h2 className="mt-4 text-3xl font-bold">
            Transformando datos en <span className="text-[#f97316]">decisiones.</span>
          </h2>
          <p className="mt-4 text-justify leading-loose text-[#7b8ba8]">
            {about.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.about_features.map((feature, index)=>(
            <article
              className="reveal-up rounded-2xl border border-[#1c2640] bg-[#0e1525] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#f97316]/60"
              key={feature.title}
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <img
                className={`mb-3 h-10 w-10 rounded-full p-2 invert ${colors[index % colors.length]}`}
                src={feature.logoURL}
                alt={`Icono de ${feature.title}`}
              />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="mt-1 text-sm text-[#7b8ba8]">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
