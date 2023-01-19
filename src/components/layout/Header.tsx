import { VscGithubAlt } from "react-icons/vsc"
import { TbMoonStars } from "react-icons/tb"
import ToggleTheme from "../theme/ToggleTheme"

const Header = () => {
  return (
    <div className="flex h-14">
      <section className="global-layout flex items-center w-full px-5">
        <div className="flex items-center justify-between w-full">
          <ul className="flex list-none gap-5 font-medium text-l-header_text">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Posts</li>
            <li className="cursor-pointer">Timeline</li>
            <li className="cursor-pointer">Projects</li>
          </ul>
          <ul className="flex list-none gap-5 text-l-header_text">
            <li className="cursor-pointer">
              <VscGithubAlt size={24} />
            </li>
            <li className="cursor-pointer">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Header
