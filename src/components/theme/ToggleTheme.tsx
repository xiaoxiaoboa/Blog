import React from "react"
import { CiDark, CiLight } from "react-icons/ci"

type Mode = "light" | "dark"

const ToggleTheme = () => {
  const [mode, setMode] = React.useState<Mode>("light")

  React.useEffect(() => {
    const localValue = localStorage.getItem("colorMode")
    // setMode((localStorage.getItem("colorMode") as Mode) || "light")
    if (localValue && localValue === "dark") {
      setMode(localValue)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleToggle = () => {
    const classNames = document.documentElement.className
    const isInclude = classNames.includes("dark")
    if (isInclude) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("colorMode", "light")
      setMode("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("colorMode", "dark")
      setMode("dark")
    }
  }

  return (
    <div
      className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
      onClick={handleToggle}
    >
      {mode === "dark" ? <CiLight size={24} /> : <CiDark size={24} />}
    </div>
  )
}

export default ToggleTheme
