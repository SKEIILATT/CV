import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Project"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Education } from "./components/sections/Education"
import { Contact } from "./components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[#060b18] text-[#eef0f6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
