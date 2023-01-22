import Head from "next/head"
import React from "react"
import DateFormat from "@/components/DateFormat/DateFormat"
import { PostsDataTypes } from "@/pages/index"

const Articles = ({ articleData }: { articleData: PostsDataTypes }) => {
  const { id, title, date, contentHtml } = articleData
  const mainRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const allATag = mainRef.current?.querySelectorAll("a")
    if (allATag) {
      allATag.forEach(tag => (tag.target = "_blank"))
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <article>
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className=" my-4 text-l-text-date dark:text-d-text-date">
          <DateFormat dateString={date} />
        </div>
        <div
          className="paragraph"
          ref={mainRef}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </>
  )
}

export default Articles
