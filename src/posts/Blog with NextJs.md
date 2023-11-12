---
title:  '使用NextJs构建属于自己的博客'
date: '2023-01-23 13:27:00'
---

## Hexo
之前一直使用的是[Hexo](https://hexo.io/zh-cn/) ，一个非常成熟的静态博客框架，构建博客很方便

## NextJs
[NextJs](https://nextjs.org/)是一个React框架，使用React即可创建全栈Web应用。他有非常优秀的[基于页面](https://nextjs.org/docs/basic-features/pages)的路由系统，和[预渲染](https://nextjs.org/docs/basic-features/pages#pre-rendering) ，使网站具有极快的速度。

## 搭建环境
[官方步骤](https://nextjs.org/docs/getting-started)：
``` shell
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript //我使用了这个
# or
pnpm create next-app --typescript
```

![image](https://cdn.statically.io/gh/xiaoxiaoboa/blog-pic@main/image.3mvtbke8li20.png)

### CSS
可以使用nextjs内置的`module.css` 也可以使用第三方库，这里我使用了[tailwindcss](https://tailwindcss.com/) 

按照[官方指引](https://tailwindcss.com/docs/guides/nextjs) 
```shell
//安装
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js 配置文件
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
​
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
//写入到globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 文件结构

![未标题-1](https://cdn.statically.io/gh/xiaoxiaoboa/blog-pic@main/未标题-1.3mag4c5parc0.png)

这里有src目录是因为创建项目时选择了使用`src`
pages目录内`api`目录暂时用不到，没了解
- `public`目录是静态资源目录
- `_app.tsx`是程序入口，无需做修改，由于是入口所以需要把`globals.css`引入到这里
- `_document.tsx`也无需修改
- `index.tsx`是**首页**，根据自己需要的样式修改即可
- `styles`目录内是全局样式和某个组件的样式
- `tailwind.config.js`是tailwind.css的配置文件
- `next.config.js`同上

>nextjs的[路由](https://nextjs.org/docs/basic-features/pages)是基于**页面**的，所以网站的页面需创建在`pages`目录下，一个页面对应一个文件

## MarkDown
当博客页面布局样式都做好后，文章(`.md`)从哪里获取呢？

创建`/src/posts/`目录，存放文章

创建`/src/lib/posts.ts`文件，用于文章数据

需要获取哪些数据？

- 获取`src/posts`目录下所有`.md`文件的文件名作为ID；因为要路由到这个文章，则是以文件名为目标`http://example.com/NextJs介绍` 
-  获取`src/posts`目录下所有`.md`文件，只需要`.md`文件的`front-matter`,形成列表
- 最后则是获取`.md`文件的文章内容

> 进行以上步骤前，需要安装一些库
> [gray-matter](https://github.com/jonschlinkert/gray-matter)、
   [rehype-stringify](https://github.com/rehypejs/rehype/tree/main)、
   [remark-parse](https://github.com/remarkjs/remark/tree/main)、
  [ remark-rehype](https://github.com/remarkjs/remark-rehype)

```js
const postsDirectory = path.join(process.cwd(), "src/posts")
```

```js
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
```

```typescript
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
```

```js
/* 获取文章数据 */
export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContent)
  const processedContent = await unified()
    .use(remarkParase)
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
```

## 动态路由
有了文章数据后，怎么渲染出来呢？总不能每个文章都创建一个页面文件把？

可以用到NextJs内置的[动态路由](https://nextjs.org/docs/routing/dynamic-routes)来处理

创建文件`src/pages/posts/[id].ts`，文件名字就是带`[]`的

动态路由页面和React函数组件是差不多的，只是多了两个NextJs内置的方法，用于获取数据

函数名字是固定的不要修改，同时需要导出`export`
```ts
interface Params {
  id: string
}

//获取静态资源路径
export const getStaticPaths = () => {
  const paths = getPostsIds()

  return {
    paths,
    fallback: false
  }
}

//获取静态资源数据
export const getStaticProps = async ({ params }: { params: Params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)) //ts下需要这么写
    }
  }
}
```

## 部署
完成之后，可以将项目部署到GitHub。

注册Vercel，选择GitHub仓库，即可自动部署至Vercel。

最后，由于NextJs有**预渲染**机制，在项目构建时就会渲染，所以博客访问起来极快！

享受吧！！！