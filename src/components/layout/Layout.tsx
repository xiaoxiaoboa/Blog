import React from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Head>
        <title>Xiaobo's Blog</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <main className="px-10 mt-12">
          <div className=" max-w-[700px] m-auto pb-8">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
