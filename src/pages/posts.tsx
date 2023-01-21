import React from "react"
import { getSortedPostsData, SortedData } from "@/lib/posts"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"

interface SortedPosts extends SortedData {
  id: string
}

const Posts = ({ allSortedPosts }: { allSortedPosts: SortedPosts[] }) => {
  return (
    <Layout>
      <Head>
        <title>posts</title>
      </Head>
      {allSortedPosts.map((post, index) => (
        <Link href={`/posts/${post.id}`} key={index}>
          <div className="mb-5 cursor-pointer">
            <h1 className="text-xl">{post.title}</h1>
            <div className="text-sm text-l-text-date dark:text-d-text-date">
              {post.date}
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Posts

export const getStaticProps = () => {
  const allSortedPosts = getSortedPostsData()
  const filteredData = allSortedPosts.filter(data => data.id !== "Introduction")

  return {
    props: {
      allSortedPosts: JSON.parse(JSON.stringify(filteredData))
    }
  }
}
