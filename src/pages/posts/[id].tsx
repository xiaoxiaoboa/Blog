import React from "react"
import { getPostData, getPostsIds } from "@/lib/posts"
import Layout from "@/components/layout/Layout"
import Articles from "@/components/Articles/Articles"
import { PostsDataTypes } from "@/types/post"


const Post = ({ postData }: { postData: PostsDataTypes }) => {
  return (
    <Layout>
      <Articles articleData={postData} />
    </Layout>
  )
}

export default Post

interface Params {
  id: string
}

export const getStaticPaths = () => {
  const paths = getPostsIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData))
    }
  }
}
