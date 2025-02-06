'use client'

import { useState } from "react"
import Image from "next/image"

const projects = [
  { id: 1, title: "CMS Restó", image: "/resto.png", link: "https://cms-resto.vercel.app/", github: "https://github.com/AlbertCarri/cms-supabase" },
  { id: 2, title: "App del Clima", image: "/clima.png", link: "https://groundhog-weather.vercel.app/", github: "https://github.com/AlbertCarri/groundhog-weather" },
  { id: 3, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/", github: "https://github.com/AlbertCarri/tetris-game" },
  { id: 4, title: "Página UmamiVeg", image: "/umamiveg.png", link: "https://umamiveg.vercel.app//", github: "https://github.com/AlbertCarri/umamiveg" },
  { id: 5, title: "Juego del Trivia", image: "/triviaprog.png", link: "https://trivia-frontend-five.vercel.app/", github: "https://github.com/AlbertCarri/trivia-frontend" },
  { id: 6, title: "Juego del Trivia", image: "/triviaciencias.png", link: "https://trivia-ciencia.vercel.app/", github: "https://github.com/AlbertCarri/trivia-ciencia" },
  { id: 7, title: "Juego del pares", image: "/pares.png", link: "https://juego-de-pares.netlify.app/", github: "https://github.com/AlbertCarri/Juego-de-pares" },
]

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleImages = 3

  const nextSlide = () => {
    if (startIndex < projects.length - visibleImages) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 neon-text text-center">Mis proyectos terminados</h2>

      <div className="relative w-15/16 mx-auto overflow-hidden p-4">

        <div className="flex gap-2 transition-transform duration-300 w-[1800px]"
          style={{ transform: `translateX(-${startIndex * 750}px)` }}>

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 1/4 flex-shrink-0 rounded-lg pixel-borders mx-4"
              style={{ width: "600px" }}
            >
              <Image
                src={project.image || "/placeholder.png"}
                alt={project.title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full rounded-lg"
              />
              <div className="flex flex-col p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <a href={project.link}
                  target="blank"
                  className="neon-text-menu hover:neon-text-menu-hover">
                  Visitar Web
                </a>
                <a href={project.github}
                  target="blank"
                  className="neon-text-menu hover:neon-text-menu-hover">
                  Ver código en Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="flex flex-row mt-8 justify-center">
          <img src="/arrowleft.png" alt="arrowleft" width={100} height={100}/>
          <button onClick={prevSlide} className=" btn-arcade mx-4"></button>
          <button onClick={nextSlide} className="btn-arcade mx-4"></button>
          <img src="/arrowrigth.png" alt="arrowrigth" width={100} height={100}/>
        </div>
    </section>
  )
}

export default Projects

