"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "CMS Restó (SaaS)",
    image: "/resto.webp",
    link: "https://cms-resto.vercel.app/",
    github: "https://github.com/AlbertCarri/cms-supabase",
    info: "SaaS para crear una carta de menú que se pueda leer con un código QR desde cualquier smartphone con navegador.",
    problem:
      "Existen muchos servicios que ofrecen una herramienta para cargar menús que se puedan leer escaneando un simple código QR, pero son muy complejos. Esta versión es simple y real para un negocio gastronómico.",
    solution:
      "CMS full-stack con autenticación, CRUD y despliegue en producción. Tiene la opción de cargar hasta 20 productos en la versión gratuita, y sin límite abonando un plan de suscripción mensual a través de MercadoPago.",
    stack:
      "Next.js / React, TypeScript, Supabase, Tailwind, Zod y Mercado Pago. Subido a producción en Vercel",
  },
  {
    id: 2,
    title: "Página UmamiVeg",
    image: "/umamiveg.webp",
    link: "https://umamiveg.vercel.app//",
    github: "https://github.com/AlbertCarri/umamiveg",
    info: "Pagina interactiva para emprendimiendo gastronómico de comida vegana",
    problem:
      "Las opciones de Whatsapp business solo ofrecen una tienda con productos pero muy pocos detalles, y a veces un producto tiene una historia.",
    solution:
      "Esta página viene a solucionar esa falta de orden y detalles, además ofrece un carrito de compras que se integra muy bien con el whatsapp común.",
    stack:
      "Next.js / React, JavaScript, Supabase, Tailwind y OpenRouter para el chatbot. Subido a producción en Vercel",
  },
  {
    id: 3,
    title: "ttf to woff/woff2",
    image: "/woff.webp",
    link: "https://woff-converter.vercel.app/",
    github: "https://github.com/AlbertCarri/woff-converter",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 4,
    title: "UI components",
    image: "/componentsui.webp",
    link: "https://uicomponents.edelbyte.com.ar/",
    github: "https://github.com/AlbertCarri/ui-components",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 5,
    title: "Astróloca",
    image: "/astroloca.webp",
    link: "https://astroloca-bot.vercel.app/",
    github: "https://github.com/AlbertCarri/astroloca-bot",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 6,
    title: "App del Clima",
    image: "/clima.webp",
    link: "https://groundhog-weather.vercel.app/",
    github: "https://github.com/AlbertCarri/groundhog-weather-typescript",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 7,
    title: "Juego del tetris",
    image: "/tetris.webp",
    link: "https://tetris-javascript-2024.netlify.app/",
    github: "https://github.com/AlbertCarri/tetris-game",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 8,
    title: "Retos de código",
    image: "/retosdecodigo.webp",
    link: "https://codechallenge.edelbyte.com.ar/",
    github: "https://github.com/AlbertCarri/codewar-alberto",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 9,
    title: "Juego del Trivia",
    image: "/triviaciencias.webp",
    link: "https://trivia-ciencia.vercel.app/",
    github: "https://github.com/AlbertCarri/trivia-ciencia",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
  {
    id: 10,
    title: "SUDOKU",
    image: "/sudoku.webp",
    link: "https://sudoku.edelbyte.com.ar/",
    github: "https://github.com/AlbertCarri/sudoku-game",
    info: "",
    problem: "",
    solution: "",
    stack: "",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const [imageWidth, setImageWidth] = useState(350);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTheme, setModalTheme] = useState(1);

  useEffect(() => {
    console.log("window:", typeof window);
    if (typeof window !== "undefined") {
      const updateSize = () => {
        const width = window.innerWidth;
        if (width > 1280) {
          setImageWidth(300);
          setVisibleImages(2);
        } else if (width > 768) {
          setImageWidth(300);
          setVisibleImages(2);
        } else {
          setImageWidth(300);
          setVisibleImages(1);
        }
      };

      updateSize();
      window.addEventListener("resize", updateSize);

      return () => {
        window.removeEventListener("resize", updateSize);
      };
    }
  }, []);

  const openModal = (id) => {
    setModalOpen(true);
    setModalTheme(id - 1);
  };

  const nextSlide = () => {
    if (startIndex < projects.length - visibleImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className="h-svh md:py-20 py-4 lg:scroll-mt-12 scroll-mt-8"
    >
      <h2 className="md:text-3xl lg:text-5xl text-xl font-bold mb-10 neon-text text-center">
        Mis proyectos terminados
      </h2>

      <div className="relative w-full mx-auto overflow-hidden p-2">
        <div
          className="flex gap-2 transition-transform duration-300 md:w-[]"
          style={{
            width: `${projects.length * imageWidth}px`,
            transform: `translateX(-${startIndex * (imageWidth + 40)}px)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{ width: `${imageWidth}px` }}
              className="bg-gray-800 shrink-0 rounded-lg pixel-borders mx-4"
            >
              <div className="flex h-2/3">
                <Image
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  width={imageWidth}
                  height={imageWidth / 1.5}
                  loading="lazy"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex h-1/3 justify-center items-center p-4">
                <div className="flex flex-col text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => openModal(project.id)}
                    className="text-xl text-violet-500 cursor-pointer"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row mt-8 justify-center items-center">
        <img
          src="/arrowleft.png"
          alt="arrowleft"
          className="md:w-24 md:h-24 w-4 h-4"
        />
        <button onClick={prevSlide} className="btn-arcade mx-4"></button>
        <button onClick={nextSlide} className="btn-arcade mx-4"></button>
        <img
          src="/arrowrigth.png"
          alt="arrowrigth"
          className="md:w-24 md:h-24 w-4 h-4"
        />
      </div>
      {modalOpen && (
        <div className="fixed flex inset-0 z-20 items-center justify-center bg-black/50 backdrop-blur-xs">
          <div className="w-3/4 pixel-borders rounded-xl p-3 bg-gray-800">
            <div className="flex md:flex-row flex-col">
              <div className="w-1/2">
                <Image
                  src={projects[modalTheme].image || "/placeholder.png"}
                  alt={projects[modalTheme].title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="w-1/2 mx-auto my-auto ">
                <h3 className="md:text-4xl text-xl font-bold mb-2">
                  {projects[modalTheme].title}
                </h3>
                <a
                  href={projects[modalTheme].link}
                  target="blank"
                  className="block mt-8 text-xl md:text-2xl neon-text-menu hover:neon-text-menu-hover"
                >
                  Visitar Web
                </a>
                <br />
                <a
                  href={projects[modalTheme].github}
                  target="blank"
                  className="block text-xl md:text-2xl neon-text-menu hover:neon-text-menu-hover mt-2"
                >
                  Ver código en Github
                </a>
              </div>
            </div>
            <div>
              <p className="text-md mt-6">
                <span className="neon-text text-xl">Descripción:</span>
                {projects[modalTheme].info}
              </p>
              <p className="text-md">
                <span className="neon-text text-xl">Problema:</span>
                {projects[modalTheme].problem}
              </p>
              <p className="text-md">
                <span className="neon-text text-xl">Solución:</span>
                {projects[modalTheme].solution}
              </p>
              <p className="text-md">
                <span className="neon-text text-xl">Stack:</span>
                {projects[modalTheme].stack}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="block mx-auto mt-3 bg-amber-600 py-2 px-3 rounded-lg cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

{
  /*
  <a
                    href={project.link}
                    target="blank"
                    className="neon-text-menu hover:neon-text-menu-hover"
                  >
                    Visitar Web
                  </a>
                  <a
                    href={project.github}
                    target="blank"
                    className="neon-text-menu hover:neon-text-menu-hover mt-2"
                  >
                    Ver código en Github
                  </a>
  / */
}
