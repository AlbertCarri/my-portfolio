import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="flex flex-col justify-between mt-20 mx-auto p-16">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

