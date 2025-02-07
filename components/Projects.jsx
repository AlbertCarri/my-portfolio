'use client'

import { useEffect, useState } from "react"
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [visibleImages, setVisibleImages] = useState(3)
  const [imageWidth, setImageWidth] = useState(350)

  useEffect(() => {
    const updateSize = () => {
      const width = Window.innerWidth
      setWindowWidth(width)

      if (width > 1280) {
        setImageWidth(600)
        setVisibleImages(3)
      } else if (width > 768) {
        setImageWidth(600)
        setVisibleImages(2)
      } else {
        setImageWidth(300)
        setVisibleImages(1)
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

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
    <section id="projects" className="md:py-20 py-4">
      <h2 className="md:text-3xl text-xl font-bold mb-10 neon-text text-center">
        Mis proyectos terminados
      </h2>

      <div className="relative w-full mx-auto overflow-hidden p-2">
        <div
          className="flex gap-2 transition-transform duration-300"
          style={{
            width: `${projects.length * imageWidth}px`,
            transform: `translateX(-${startIndex * (imageWidth + 40)}px)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{ width: `${imageWidth}px` }}
              className="bg-gray-800 flex-shrink-0 rounded-lg pixel-borders mx-4"
            >
              <Image
                src={project.image || "/placeholder.png"}
                alt={project.title}
                width={imageWidth}
                height={imageWidth / 1.5}
                loading="lazy"
                className="w-full rounded-lg"
              />
              <div className="flex flex-col p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                  className="neon-text-menu hover:neon-text-menu-hover"
                >
                  Ver código en Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row mt-8 justify-center items-center">
        <img src="/arrowleft.png" alt="arrowleft" className="md:w-24 md:h-24 w-4 h-4" />
        <button onClick={prevSlide} className="btn-arcade mx-4"></button>
        <button onClick={nextSlide} className="btn-arcade mx-4"></button>
        <img src="/arrowrigth.png" alt="arrowrigth" className="md:w-24 md:h-24 w-4 h-4" />
      </div>
    </section>
  )
}

export default Projects
