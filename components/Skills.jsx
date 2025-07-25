import { CodeSVG, DatabaseSVG, GithubSVG, PaletteSVG, ReactSVG, NextjsSVG } from "./Icons"


const skills = [
  { id: 1, name: "Html.CSS.JS", icon: CodeSVG },
  { id: 2, name: "TypeScript", icon: CodeSVG },
  { id: 3, name: "Next.js", icon: NextjsSVG },
  { id: 4, name: "React", icon: ReactSVG },
  { id: 5, name: "Supabase", icon: DatabaseSVG },
  { id: 6, name: "TailwindCSS", icon: PaletteSVG },
  
]

const Skills = () => {
  return (
    <section id="skills" className="md:py-20 py-8 pixel-bg">
      <h2 className="md:text-3xl text-xl font-bold mb-14 neon-text text-center">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-4 gap-8 justify-center">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-4 pixel-borders">
              <skill.icon size={48} />
            </div>
            <h3 className="md:text-sm text-xs font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

