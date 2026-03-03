import Image from "next/image";
import Link from "next/link";

export default function MyBook() {
  return (
    <section
      id="mybook"
      className="flex flex-col w-full h-svh p-2 items-center justify-center "
    >
      <div className="flex flex-row w-full mt-8 p-4 items-center">
        <div className="text-left">
          <h2 className="sm:text-2xl lg:text-4xl text-xl font-bold neon-text mb-8">
            Mi Libro
          </h2>
          <h3 className="sm:text-xl lg:text-xl text-xl font-bold mb-2">
            "Desarrollo de SOFTWARE"
          </h3>
          <p className="sm:text-sm lg:text-md text-xs text-gray-200 mb-2">
            "Aprender programación después de los 40"
          </p>
          <p className="sm:text-sm lg:text-md text-xs font- text-amber-500 mb-8">
            "MIEDOS, MITOS Y REALIDAD"
          </p>
          <p className="sm:text-sm lg:text-md text-xs">
            Disponible en Amazon en versión tapa blanda y Kindle. Link sobre el libro.
          </p>
        </div>
        <div className="mx-auto">
          <Link href={"https://www.amazon.es/dp/B0G4SRFBV6"} target="blank">
            <Image
              src="/libro3d.webp"
              alt="Pixel Art Developer"
              width={400}
              height={400}
              className="bg-transparent m-auto drop-shadow-blue-500 drop-shadow-xl"
            />
          </Link>
        </div>
      </div>
      <p className="sm:text-sm lg:text-md leading-6 text-xs mt-8 text-left">
        Hay una frase que se repite como un eco en la cabeza de muchas personas
        que se acercan al mundo de la programación después de los 40: <br />
        “Ya llegué tarde.” <br />
        No hace falta que nadie la diga en voz alta. Está en los comentarios de
        redes, en los videos donde aparece gente muy joven hablando de
        tecnologías nuevas, en los memes de “junior de 20 años con 10 años de
        experiencia”. Y, sobre todo, está dentro de la propia cabeza del lector.
        <br />
        La idea no es pintar un mundo color de rosa ni vender la ilusión de que
        la edad no importa para nada. Importa!. Cambia el contexto, la energía
        disponible, el tiempo libre, la urgencia económica. <br />
        Pero eso no significa que la puerta esté cerrada. Significa que el plan
        tiene que ser distinto.
      </p>
    </section>
  );
}
