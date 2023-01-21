import Articles from "@/components/Articles/Articles"
import Layout from "@/components/layout/Layout"
import { getPostData, getPostsIds, getSortedPostsData } from "@/lib/posts"

export interface PostsDataTypes {
  id: string
  contentHtml: string
  title: string
  date: string
}
export default function Home({ postData }: { postData: PostsDataTypes }) {
  return (
    <Layout>
      <Articles articleData={postData} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const id = getPostsIds().find(itme => itme.params.id === "Introduction")?.params.id!
  const postData = await getPostData(id)
  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData))
    }
  }
}
