import { principal } from "../../data/principal";
import {Mail, Github, Linkedin} from "lucide-react"
export const Hero = () => {
    return (
        <section id="home" className="pt-20 px-4 min-h-screen flex flex-col justify-center">
            <div className="bg-[#0e1525] mb-3 py-5 px-5 pr-20 rounded-2xl">
                <p className="text-green-500 mb-2">{principal.available ? "🟢 Disponible para oportunidades" : "🔴 No disponible en este momento"} </p>
                <h1>{principal.first_name} </h1>
                <span className="text-[#f97316] text-3xl font-bold "> {principal.last_name} </span>
                <p className="text-[#06b6d4] font-semibold mt-2 mb-2"> {principal.title}</p>
                <p className="mb-8"> {principal.description} </p>
                <div id="buttons" className="flex gap-0.5" >
                    <a className="inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] bg-[#f97316] text-black font-bold " href={`mailto:${principal.email}`} > <Mail size={16}/> Contactar</a>
                    <a className="inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] font-bold" href={principal.github}><Github size={16}/>Github</a>
                    <a className=" inline-flex items-center gap-2 border-3 p-2 rounded-2xl border-[#1c2640] font-bold " href={principal.linkedin}> <Linkedin size={16} /> LinkedIn</a>
                </div>
            </div>
            <div>
                <div>
                    <img src={principal.avatar} alt="profile pic" />
                    <p>{principal.semester}</p>
                </div>
                <div>
                    <p>{principal.city}</p>
                    <p>{principal.country}</p>
                    <p>-------</p>
                    <p>{principal.university}</p>
                    <p>{principal.career}</p>
                    
                </div>
            </div>
        </section>
    )
}