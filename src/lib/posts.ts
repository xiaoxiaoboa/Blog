import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParase from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeHightLight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "src/posts")

export default postsDirectory

/* 获取文章名称：id */
export const getPostsIds = () => {
  const filesName = fs.readdirSync(postsDirectory)

  return filesName.map(file => {
    return {
      params: {
        id: file.replace(/\.md$/, "")
      }
    }
  })
}

export interface SortedData {
  title: string
  date: string
}
/* 获取排序后的文章列表 */
export const getSortedPostsData = () => {
  const filesName = fs.readdirSync(postsDirectory)

  const allPostsData = filesName.map(fileName => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContent)
    return {
      id,
      ...(matterResult.data as SortedData)
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/* 获取文章数据 */
export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContent)
  const processedContent = await unified()
    .use(remarkParase)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHightLight)
    .use(rehypeStringify)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as SortedData)
  }
}
