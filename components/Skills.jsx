import {
  CodeSVG,
  DatabaseSVG,
  GithubSVG,
  PaletteSVG,
  ReactSVG,
  NextjsSVG,
  Tool
} from "./Icons";

const frontendSkills = [
  { id: 1, name: "Html.CSS.JS", icon: CodeSVG },
  { id: 2, name: "TypeScript", icon: CodeSVG },
  { id: 3, name: "Next.js", icon: NextjsSVG },
  { id: 4, name: "React", icon: ReactSVG },
  { id: 5, name: "TailwindCSS", icon: PaletteSVG },
];
const backendSkills = [{ id: 5, name: "Supabase", icon: DatabaseSVG }];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col scroll-mt-12 md:py-20 py-8 pixel-bg justify-center"
    >
      <h2 className="md:text-3xl text-xl font-bold mb-14 neon-text text-center">
        Habilidades {"<"}Skills{">"}
      </h2>
      <article>
        <h3 className="md:text-2xl text-xl font-bold mb-14 neon-text text-center">
          Frontend
        </h3>
        <div className="flex flex-row justify-center md:gap-16 gap-4">
          {frontendSkills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-8 pixel-borders">
                <skill.icon size={48} />
              </div>
              <h3 className="md:text-lg text-xs font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </article>
      <article className="mt-12">
        <h3 className="md:text-2xl text-xl font-bold mb-14 neon-text text-center">
          Backend & Datos
        </h3>
        <div className="flex flex-row md:gap-16 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-8 pixel-borders">
              <DatabaseSVG size={48} />
            </div>
            <h3 className="md:text-lg text-xs font-bold">
              Supabase (Auth, Postgres, Storage, Edge Functions) · APIs REST
            </h3>
          </div>
        </div>
      </article>
      <article className="mt-12">
        <h3 className="md:text-2xl text-xl font-bold mb-14 neon-text text-center">
          IA & Metodologías
        </h3>
        <div className="flex flex-row md:gap-16 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-8 pixel-borders text-4xl">
              IA
            </div>
            <p className="md:text-lg text-xs font-bold">
              Agentes de IA · Spec-Driven Development (SDD) · Organic-Driven
              Development (ODD) ·
            </p>
            <p className="md:text-lg text-xs font-bold">
              Prompt engineering orientado a código
            </p>
            <p className="md:text-lg text-xs font-bold">
              Vibe coding + limpieza/refactor post-generación
            </p>
          </div>
        </div>
      </article>
      <article className="mt-12">
        <h3 className="md:text-2xl text-xl font-bold mb-14 neon-text text-center">
          Herramientas
        </h3>
        <div className="flex flex-row md:gap-16 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-8 pixel-borders text-4xl">
              <Tool size={48} />
            </div>
            <p className="md:text-lg text-xs font-bold">
              Git · Vercel · Mercado Pago (integraciones)
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;

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
