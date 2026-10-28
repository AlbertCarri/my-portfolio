import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="header"
      className="flex flex-col w-full mt-2 lg:h-svh lg:-mt-4 p-2 items-center justify-center"
    >
      <h2 className="sm:text-3xl/10 lg:text-5xl/18 text-xl font-bold mb-8 neon-text">
        Alberto Edelmiro Carrizo
      </h2>
      <p className="sm:text-sm lg:text-xl text-center text-xs mb-8 mx-10">
        Desarrollador Frontend / Full-Stack
        <br />
        Especializado en agentes de IA y desarrollo con especs
      </p>

      <p className="sm:text-sm lg:text-xl leading-6 text-xs mt-16 text-left">
        Construyo aplicaciones web con TypeScript, React/Next.js y Supabase.
        <br />
        Trabajo con agentes de IA, Spec-Driven Development {"(SDD)"} y
        Organic-Driven Development {"(ODD)"} para pasar de una idea o especificación
        a un código fácil de controlar. 
      </p>
    </section>
  );
};

export default Hero;
