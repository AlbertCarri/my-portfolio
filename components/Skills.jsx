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
    <section id="skills" className="flex flex-col h-svh md:py-20 py-8 pixel-bg justify-center">
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

{
  /*
  Habilidades (versión actualizada)
Frontend
TypeScript · React · Next.js (App Router) · Tailwind CSS · shadcn/ui · Componentes accesibles

Backend & Datos
Supabase (Auth, Postgres, Storage, Edge Functions) · APIs REST

IA & Metodologías
Agentes de IA · Spec-Driven Development (SDD) · Organic-Driven Development (ODD) · Prompt engineering orientado a código · Vibe coding + limpieza/refactor post-generación

Herramientas
Git · Vercel · Mercado Pago (integraciones) · Figma (nivel diseño)

Libro (más abajo)
“Desarrollo de SOFTWARE – Aprender programación después de los 40”
Reflexiones sobre miedos, mitos y la realidad de aprender a programar en una etapa de la vida distinta, en la era de la IA y los agentes.
Disponible en Amazon (tapa blanda).

Cierre / Contacto
Abierto a oportunidades junior/mid en frontend o full-stack, freelance o empleo remoto.
Priorizo equipos que valoren claridad, criterio y trabajo bien hecho.

Email: [tu mail]
LinkedIn: [link]
GitHub: github.com/AlbertCarri
  */
}