import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="header"
      className="flex flex-col w-full lg:h-svh mt-20 lg:mt-0 p-2 items-center justify-center"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-2/3 w-full mx-auto text-center">
          <h1 className="sm:text-2xl/10 lg:text-4xl/18 text-xl font-bold mb-8 neon-text">
            Bienvenidos a Mi
            <br />
            Portfolio Retro
          </h1>
          <p className="sm:text-sm lg:text-md text-xs mb-8 mx-10">
            Creando experiencias web con un toque nostálgico
          </p>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="mx-auto">
            <Image
              src="/mi-pixel-version2.webp"
              alt="Pixel Art Developer"
              width={256}
              height={256}
              className="pixel-borders m-auto"
            />
          </div>
        </div>
      </div>
      <p className="sm:text-sm lg:text-md leading-6 text-xs mt-16 text-left">
        Mi enfoque es construir software claro, mantenible y orientado a
        resolver problemas reales. <br />
        Vengo del mundo de la electrónica y la tecnología, donde desarrollé una
        base sólida entendiendo los sistemas desde su funcionamiento interno, lo
        que hoy aplico al desarrollo de software. <br />
        Actualmente me interesa colaborar en el desarrollo de productos SaaS,
        aplicaciones web modernas y sistemas que aporten valor real a usuarios y
        negocios.
      </p>
    </section>
  );
};

export default Hero;
