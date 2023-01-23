import React from "react"
import Layout from "@/components/layout/Layout"
import musicIcon from "public/music.png"
import blogIcon from "public/blog.png"

const Projects = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-7">Projects</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <Project
          href="https://m.freezxb.cc/"
          imgSrc={musicIcon.src}
          name="WebMusic App"
          desc="WebMusic, NeteaseCloudMusicApi"
        />
        <Project
          href="https://github.com/xiaoxiaoboa/Blog"
          imgSrc={blogIcon.src}
          name="My Blog"
          desc="使用next.js构建个人博客"
        />
      </div>
    </Layout>
  )
}

export default Projects

interface ProjectProps {
  href: string
  imgSrc: string
  name: string
  desc: string
}

const Project = (props: ProjectProps) => {
  const { href, imgSrc, name, desc } = props
  return (
    <div className="flex flex-1">
      <a href={href} target="_blank">
        <div className="flex items-center gap-2">
          <img src={imgSrc} alt="" />
          <div className="flex flex-col gap-1">
            <span className="text-xl">{name}</span>
            <span className="text-sm opacity-50">{desc}</span>
          </div>
        </div>
      </a>
    </div>
  )
}
