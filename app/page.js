import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="flex flex-col md:max-w-6xl justify-between md:mt-20 mt-4 mx-auto md:p-16 p-2">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

