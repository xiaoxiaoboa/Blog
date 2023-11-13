import Layout from "@/components/layout/Layout"
import React from "react"
import { useRouter } from "next/router"

const Redirect = () => {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    const currentPath = router.asPath
    if (currentPath.includes("code")) {
      setIsSuccess(true)
    } else if (currentPath.includes("error")) {
      setIsSuccess(false)
    }
  }, [])

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-3">
      {isSuccess && (
        <>
          <span className="text-2xl">授权完成!</span>
          <span className="text-2xl">请直接返回</span>
        </>
      )}

      {isSuccess === false && (
        <>
          <span className="text-2xl">授权失败!</span>
          <span className="text-2xl">请重试</span>
        </>
      )}
    </div>
  )
}

export default Redirect
