'use client'

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setStatus("Mensaje enviado con éxito.")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setStatus("Hubo un error al enviar el mensaje.", formData.email)
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-10 neon-text text-center">Inserte una ficha para continuar</h2>
      <form onSubmit={handleSubmit} method="post" className="w-1/2 mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nombre
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese su nombre" className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingrese su Email" className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Mensaje
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Escriba su mensaje" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders"></textarea>
        </div>
        <div className="flex w-full mt-10 justify-center">
          <button type="submit"
            className="bg-gray-800 px-3 py-2 pixel-borders cursor-pointer"
          >Enviar
          </button>
        </div>
        {status && <p className="mx-auto">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
