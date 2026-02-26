import { principal } from "../../data/principal";
import { Mail, Github, Linkedin } from "lucide-react"
export const Hero = () => {
    return (
        <section id="home" className="pt-20 px-4 min-h-screen flex flex-col justify-center md:flex-row md:gap-6">
            <div className="bg-[#0e1525] mb-3 py-5 px-5  rounded-2xl md:w-3/8 md:h-fit  ">
                <p className="text-green-500 mb-2">{principal.available ? "🟢 Disponible para oportunidades" : "🔴 No disponible en este momento"} </p>
                <h1>{principal.first_name} </h1>
                <span className="text-[#f97316] text-6xl font-bold "> {principal.last_name} </span>
                <p className="text-[#06b6d4] font-semibold mt-2 mb-2"> {principal.title}</p>
                <p className="mb-8 text-[#7b8ba8] "> {principal.description} </p>
                <div id="buttons" className="flex gap-0.5 " >
                    <a className="inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] bg-[#f97316] text-black font-bold " href={`mailto:${principal.email}`} > <Mail size={16} /> Contactar</a>
                    <a className="inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] font-bold hover:border-[#f97316] hover:bg-[#f97316]/10 " href={principal.github}><Github size={16} />Github</a>
                    <a className=" inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] font-bold hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 " href={principal.linkedin}> <Linkedin size={16} /> LinkedIn</a>
                </div>
            </div>
            <div className="md:flex md:flex-row md:gap-5 md:h-fit ">
                <div className="bg-[#0e1525] mb-3 py-5 px-5 rounded-2xl flex justify-center ">
                    <div className="text-center">
                        <img className="mx-auto w-50 h-50 rounded-full " src={principal.avatar} alt="profile pic" />
                        <p className="rounded-2xl bg-[#06b6d4] p-2 inline text-black font-semibold">{principal.semester}</p>
                    </div>

                </div>
                <div className="bg-[#0e1525] mb-3 py-5 px-5  rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="48" fill="#06b6d4">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                    <p className="font-bold">{principal.city}</p>
                    <p className="text-[#7b8ba8]">{principal.country}</p>
                    <hr className="border-gray-600 w-full my-2"/>
                    <p className="font-bold ">{principal.university}</p>
                    <p className="text-[#7b8ba8]">{principal.career}</p>

                </div>
            </div>
        </section>
    )
}