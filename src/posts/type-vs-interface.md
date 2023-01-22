---
title: 'type vs interface'
date: '2023-01-05 16:58:29'
---

在[TypeScript官方文档](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)中这样介绍：

>  Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an `interface` are available in `type`, **the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.**

大概意思呢就是：
interface 和 type 很类似，他们两个用哪一个都行；
interface的大多数特性type也有；
关键的区别是 type一旦定义完成，扩展起来就不是很方便；而interface不仅可以很方便的扩展，还可以声明已存在的同名的interface

```ts
// type 扩展
type Props1 = {
  width: string
}

type Props2 = Props1 & {
  height: string
}

const rectangle: Props2 = {width: '200', height: '200'}
```

```TS
//interface 扩展
interface Props1 {
  width: string
}

interface Props2 extends Props1 {
  height: string
}

const rectangle: Props2 = { width: '200', height: '200' }
```

```ts
//interface 同名声明
interface Props {
  width: string
}

interface Props {
  height: string
}

const rectangle: Props = { width: '200', height: "200" }
```
