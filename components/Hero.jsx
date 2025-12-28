import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full p-2 items-center md:mb-0 mb-14 ">
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
    </section>
  );
};

export default Hero;
