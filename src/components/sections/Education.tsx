import { education } from "../../data/education";

export const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 pb-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl reveal-up">
        <span className="rounded-full bg-[#f59e0b]/20 px-3 py-1 font-bold text-[#f59e0b]">
          Educación
        </span>
        <h2 className="mb-2 mt-4 text-3xl font-bold">
          Formación <span className="text-[#f59e0b]">académica</span>
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {education.map((item, index) => {
            const period = item.startDate
              ? `${item.startDate} - ${item.endDate ?? "Actualidad"}`
              : item.endDate ?? "Actualidad";

            return (
              <article
                className="reveal-up rounded-2xl border border-[#1c2640] bg-[#0e1525] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/70"
                key={`${item.level}-${item.name_school}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-4">
                  <img
                    className="h-14 w-14 rounded-xl bg-white object-cover p-1"
                    src={item.logoURL}
                    alt={`Logo de ${item.name_school}`}
                  />

                  <div>
                    <span className="rounded-full bg-[#f59e0b]/20 px-2 py-1 text-xs font-semibold text-[#f59e0b]">
                      {item.level}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{item.name_school}</h3>
                    <p className="text-sm text-[#7b8ba8]">{item.city}</p>
                    <p className="mt-1 text-sm font-semibold text-[#f59e0b]">{period}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#c7cfde]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
