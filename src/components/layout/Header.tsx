import { VscGithubAlt } from "react-icons/vsc"
import Link from "next/link"

import ToggleTheme from "../theme/ToggleTheme"

const Header = () => {
  return (
    <header className="flex h-14 mx-auto max-w-[1400px] w-full">
      <section className=" flex items-center w-full px-5">
        <div className="flex mt-3 items-center justify-between w-full  dark:text-d-text">
          <ul className="flex list-none gap-5 font-medium text-l-header_text">
            <Link href={`/`}>
              <li className="cursor-pointer">Posts</li>
            </Link>
            <Link href="/projects">
              <li className="cursor-pointer">Projects</li>
            </Link>
          </ul>
          <ul className="flex list-none gap-5 text-l-header_text">
            <li className="cursor-pointer flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/xiaoxiaoboa" target="_blank">
                <VscGithubAlt size={22} />
              </a>
            </li>
            <li className="cursor-pointer flex items-center">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Header
