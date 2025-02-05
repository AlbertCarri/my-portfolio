import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 w-full">
      <div className="mx-auto flex flex-row w-15/16 m-auto py-4">
        <Link href="/" className="w-1/2 items-start text-2xl font-bold neon-text">
          Alberto Edelmiro Carrizo
        </Link>
        <nav className="w-1/2 ">
          <ul className="flex flex-row justify-end mt-1">
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

