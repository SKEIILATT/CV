import { experiences } from "../../data/experience";

export const Experience = () =>{
  return(
    <section
      id="experience"
      className="scroll-mt-24 px-4 pb-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl reveal-up">
        <span className="rounded-full bg-[#22c55e]/20 px-3 py-1 font-bold text-[#22c55e]">
          Experiencia
        </span>
        <h2 className="mb-2 mt-4 text-3xl font-bold">
          Trayectoria <span className="text-[#22c55e]">profesional</span>
        </h2>

        <div className="relative mt-8">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#1c2640]"></div>

          <div className="space-y-8">
            {experiences.map((job, index) => {
              const period = job.endDate
                ? `${job.startDate} - ${job.endDate}`
                : job.startDate.toLowerCase() === "actualidad"
                  ? "Actualidad"
                  : `${job.startDate} - Actualidad`;

              return (
                <article
                  key={`${job.title_job}-${index}`}
                  className="reveal-up relative pl-10"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <span className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-[#22c55e] bg-[#060b18]"></span>

                  <div className="rounded-2xl border border-[#1c2640] bg-[#0e1525] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/70">
                    <p className="text-sm font-semibold text-[#22c55e]">{period}</p>
                    <h3 className="mt-1 text-lg font-bold">{job.title_job}</h3>
                    <p className="text-sm text-[#7b8ba8]">{job.job_place}</p>

                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#c7cfde]">
                      {job.bullet_description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
