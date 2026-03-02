import { skills } from "../../data/skills";
import { type SkillCategory } from "../../types";
import { Icon } from "@iconify/react";

export const Skills = () => {
  const categories: SkillCategory[] = ["Data Science", "Frontend", "Backend", "Tools"];

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 pb-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl reveal-up">
        <span className="rounded-full bg-[#b244f1]/20 px-3 py-1 font-bold text-[#b244f1]">
          Habilidades
        </span>
        <h2 className="mb-2 mt-4 text-3xl font-bold">
          Tech Stack & <span className="text-[#b244f1]">Skills</span>
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {categories.map((category) => {
            const skillList = skills.filter((skill) => skill.category === category);
            return (
              <article
                key={category}
                className="reveal-up rounded-2xl border border-[#1c2640] bg-[#0e1525] p-4 font-bold transition duration-300 hover:-translate-y-1 hover:border-[#b244f1]/70"
                style={{ animationDelay: `${0.1 * (categories.indexOf(category) + 1)}s` }}
              >
                <h3 className="mb-6 text-center text-xl">{category}</h3>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
                  {skillList.map((skill) => (
                    <div
                      key={`${category}-${skill.name}`}
                      className="inline-flex min-w-20 flex-col items-center gap-2"
                    >
                      {skill.icon ? (
                        <Icon className="h-12 w-12" icon={skill.icon} />
                      ) : null}

                      <span className="rounded-full bg-gray-400/20 px-2 py-1 text-xs">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
