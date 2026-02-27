import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Project"
function App() {
  return (
      <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      </div>
  )
}

export default App
