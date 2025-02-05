import { CodeSVG, DatabaseSVG, GithubSVG, PaletteSVG } from "./Icons"


const skills = [
  { id: 1, name: "Frontend", icon: CodeSVG },
  { id: 2, name: "Supabase", icon: DatabaseSVG },
  { id: 3, name: "TailwindCSS", icon: PaletteSVG },
  { id: 4, name: "GitHub", icon: GithubSVG },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 pixel-bg">
      <h2 className="text-3xl font-bold mb-14 neon-text text-center">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-4 pixel-borders">
              <skill.icon size={48} className="text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

