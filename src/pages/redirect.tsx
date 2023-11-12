import Layout from "@/components/layout/Layout"
import React from "react"

const Redirect = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-3">
      <span className="text-2xl">授权完成，登录成功</span>
      <span className="text-2xl">请直接返回</span>
    </div>
  )
}

export default Redirect
