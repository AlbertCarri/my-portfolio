import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:w-15/16 w-full p-2 items-center md:mb-0 mb-14">
      <div className="md:w-2/3 w-full mx-auto text-center">
        <h1 className="md:text-4xl/1 lg:text-6xl/24 text-xl font-bold mb-4 neon-text">
          Bienvenidos a 
          <br />
          Mi Portfolio Retro
        </h1>
        <p className="md:text-xl text-xs mb-8">Creando experiencias web con un toque nostálgico</p>
      </div>
      <div className="md:w-1/3 w-full">
        <div className="mx-auto">
          <Image
            src="/perfilCartoon.png"
            alt="Pixel Art Developer"
            width={256}
            height={256}
            className="pixel-borders m-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

