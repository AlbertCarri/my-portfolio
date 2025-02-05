const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-10 neon-text text-center">Drop a Coin to Continue</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded pixel-borders"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-neon-pink text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-neon-yellow transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact

