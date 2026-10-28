import Image from "next/image";
import Link from "next/link";

export default function MyBook() {
  return (
    <section
      id="mybook"
      className="flex flex-col w-full lg:h-svh mt-12 mb-12 lg:mt-0 p-2 items-center justify-center "
    >
      <div className="flex flex-col lg:flex-row w-full mt-8 p-4 items-center">
        <div className="text-left">
          <h2 className="sm:text-2xl lg:text-4xl text-xl font-bold neon-text mb-8">
            Mi Libro
          </h2>
          <h3 className="sm:text-xl lg:text-xl text-xs font-bold mb-2">
            "Desarrollo de SOFTWARE"
          </h3>
          <p className="sm:text-sm lg:text-md text-xs text-gray-200 mb-2">
            "Aprender programación después de los 40"
          </p>
          <p className="sm:text-sm lg:text-md text-xs font- text-amber-500 mb-8">
            "MIEDOS, MITOS Y REALIDAD"
          </p>
          <p className="sm:text-sm lg:text-md text-xs">
            Disponible en Amazon en versión tapa blanda. Link sobre el libro.
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
        que se acercan al mundo de la programación después de los 40: “Ya llegué
        tarde.” A esa duda histórica hoy se le suma un nuevo fantasma: "Si la
        Inteligencia Artificial y los agentes escriben código solos, ¿qué
        espacio queda para mí?" Está en las redes, en la velocidad con la que
        surgen nuevas herramientas y en el ruido constante del mercado. Y, sobre
        todo, está dentro de la propia cabeza del lector.
        <br />
        La idea no es pintar un mundo color de rosa ni vender la ilusión de que
        la edad o el paradigma actual no importan. ¡Importan! Cambia el tiempo
        disponible, la urgencia económica y la forma en que aprendemos. Pero la
        llegada de la IA no cerró la puerta; cambió la cerradura. Hoy el valor
        no está en memorizar sintaxis a toda velocidad, sino en saber qué
        construir, cómo estructurarlo y qué problemas resolver. La experiencia
        de vida ya no es una desventaja: es el criterio que guía a la
        tecnología. El plan simplemente tiene que ser distinto.
      </p>
    </section>
  );
}
