import Head from "next/head"
import React from "react"
import DateFormat from "@/components/DateFormat/DateFormat"
import { PostsDataTypes } from "@/pages/index"

const Articles = ({ articleData }: { articleData: PostsDataTypes }) => {
  const { id, title, date, contentHtml } = articleData
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
        <div className="paragraph" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </>
  )
}

export default Articles
