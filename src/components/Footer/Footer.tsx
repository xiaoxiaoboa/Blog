import React from "react"

const Footer = () => {
  return (
    <div className="px-10">
      <div className="max-w-[700px] m-auto pt-14 pb-16">
        <div className="text-sm">
          <span className="opacity-70">BY-</span>
          <a href="https://nextjs.org/" target="_blank" className="border-b-[1px]">
            NextJs
          </a>
          <span className="opacity-70"> | </span>
          <a
            href="https://zh-hans.reactjs.org/"
            target="_blank"
            className="border-b-[1px]"
          >
            React
          </a>
          <span className="opacity-70"> | </span>
          <a href="https://tailwindcss.com/" target="_blank" className="border-b-[1px]">
            Tailwind CSS
          </a>
          &nbsp; &nbsp;
          <span className="opacity-70">2023 - PRESENT</span>
          <span className="opacity-70"> © XIAOBO</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
