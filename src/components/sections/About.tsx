import { about } from "../../data/about";

export const About = () =>{
    const color = ["bg-[#f97316]", "bg-[#30acce]", "bg-[#3d35ce]", "bg-[#6bce80]"]
    return(
       <section id="about" className="pt-20 px-4 min-h-screen md:flex md:ml-85 md:mr-85 md:gap-20">
            <div className="text-wrap md:w-2xl">
                <span className="bg-[#f97316]/60 text-[#f97316] font-bold  p-2 rounded-full ">Sobre Mi</span>
                <h2 className="text-3xl mt-3 mb-2 font-bold flex ">Transformando datos en</h2><span className="text-[#f97316] text-3xl mt-3 mb-2 font-bold flex ">decisiones.</span>
                <p className="text-[#7b8ba8] leading-loose text-justify "> {about.description} </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:h-fit">
                {about.about_features.map((feature, index)=>(
                    <article className="mt-4 bg-[#0e1525] px-5 py-4 rounded-2xl" key={feature.title}>
                        <img className={`invert rounded-full p-2 mb-3 ${color[index]} w-10 h-10`} src={feature.logoURL} alt="logo_1" />
                        <h2 className="font-bold"> {feature.title} </h2>
                        <p className="text-[#7b8ba8]"> {feature.description} </p>
                    </article>
                ))}
            </div>
       </section>
    )
}