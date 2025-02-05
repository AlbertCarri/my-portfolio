import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-15/16 p-2 items-center">
      <div className="md:w-2/3 w-full m-auto">
        <h1 className="text-4xl/1 md:text-6xl/24 font-bold mb-4 neon-text">
          Bienvenidos a 
          <br />
          Mi Portfolio Retro
        </h1>
        <p className="text-xl mb-8">Creando experiencias web con un toque nostálgico</p>
        <a
          href="#contact"
          className="bg-neon-blue text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-neon-pink transition-colors"
        >
          Let's Connect
        </a>
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

