import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 w-full">
      <div className="mx-auto flex md:flex-row flex-col w-15/16 py-4 md:text-start text-center">
        <Link href="/" className="md:w-1/2 w-full md:text-xl text-xl font-bold neon-text">
          Alberto Edelmiro Carrizo
        </Link>
        <nav className="w-1/2 md:block hidden text-md">
          <ul className="flex md:flex-row flex-col md:justify-end justify-center mt-1">
            <li>
              <Link href="#projects" className="neon-text-menu hover:neon-text-menu mx-4">
                Projectos
              </Link>
            </li>
            <li>
              <Link href="#skills" className="neon-text-menu hover:neon-text-menu mx-4">
                Habilidades
              </Link>
            </li>
            <li>
              <Link href="#contact" className="neon-text-menu hover:neon-text-menu">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header

