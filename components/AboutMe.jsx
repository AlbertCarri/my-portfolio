import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full lg:mt-0 p-2 items-center justify-center scroll-mt-24"
    >
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-2/3">
          <h2 className="sm:text-2xl/10 lg:text-4xl/18 text-xl font-bold mb-8 neon-text">
            Sobre mi
          </h2>
          <p className="sm:text-md lg:text-xl text-xs text-left mb-8">
            Empecé a programar de forma autodidacta hace tres años, después de
            una trayectoria previa como técnico electrónico {'(10 años)'} y técnico gráfico {'(15 años)'}.
            Hoy me enfoco en resolver problemas reales  con código y
            herramientas modernas de IA. No compito por velocidad de tipeo:
            compito por claridad de especificación, criterio de producto y
            capacidad de dirigir agentes que implementen, verifiquen y mejoren
            el software. Busco roles junior/mid de frontend o full-stack (remoto
            o híbrido) donde pueda aportar valor desde el primer día.
          </p>
        </div>
        <div className="w-1/3 mx-auto my-auto">
          <Image
            src="/mi-pixel-version2.webp"
            alt="Pixel Art Developer"
            width={256}
            height={256}
            className="pixel-borders m-auto"
          />
        </div>
      </div>
      <h3 className="sm:text-2xl/10 lg:text-4xl/18 text-xl font-bold mb-8 neon-text">
        Enfoque actual: Agentes + SDD + ODD
      </h3>

      <ul className="sm:text-md lg:text-xl text-xs mb-8 text-left list-disc">
        <li className="mb-4">
          Agentes de IA: diseño prompts, y orquesto a los agentes para que 
          generen, refactoricen y validen código siguiendo mis criterios.
        </li>
        <li className="mb-4">
          Spec-Driven Development (SDD): la especificación es la fuente de
          verdad desde el minuto cero. Defino qué debe hacer el sistema, criterios de aceptación y
          ,restricciones y reglas antes de implementar. Luego el agente trabaja contra esa
          spec.
        </li>
        <li className="mb-4">
          Organic-Driven Development (ODD): trato el software como un sistema
          vivo que crece por cambios pequeños, se adapta con feedback real y
          mantiene coherencia con todo el proyecto. Ideal para iterar con agentes sin
          perder el control.
        </li>
      </ul>
      <p className="sm:text-md lg:text-xl text-xs mb-8">
        Esto me permite entregar features más predecibles, con menos retrabajo y
        mejor alineación entre lo que se pide y lo que se construye. 
      </p>
    </section>
  );
}
