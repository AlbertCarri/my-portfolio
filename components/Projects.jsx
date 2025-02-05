'use client'

import { useState } from "react"

const projects = [
  { id: 1, title: "CMS Restó", image: "/resto.png", link: "https://cms-resto.vercel.app/" },
  { id: 2, title: "App del Clima", image: "/clima.png", link: "https://groundhog-weather.vercel.app/" },
  { id: 3, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/" },
  { id: 4, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/" },
  { id: 5, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/" },
  { id: 6, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/" },
  { id: 7, title: "Juego del tetris", image: "/tetris.png", link: "https://tetris-javascript-2024.netlify.app/" },
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

        <div className="flex gap-2 transition-transform duration-400"
          style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 1/4 flex-shrink-0 rounded-lg pixel-borders mx-4"
              style={{ width: "500px" }}
            >
              <img
                src={project.image || "/placeholder.png"}
                alt={project.title}

                className="w-full rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <a href={project.link}
                  target="blank"
                  className="neon-text-menu hover:neon-text-menu-hover">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {/*<div className="flex justify-center mt-4">*/}
        <div className="absolute top-1/3 left-0">
          <button onClick={prevSlide} className=" btn-arcade mx-4"></button>
        </div>
        <div className="absolute top-1/3 -right-4">
          <button onClick={nextSlide} className="btn-arcade mx-4"></button>
        </div>
      </div>
      {/*</div>*/}
    </section>
  )
}

export default Projects

