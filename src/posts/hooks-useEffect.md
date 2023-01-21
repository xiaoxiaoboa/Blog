---
title: 'hooks - useEffect'
categories:
  - - 计算机
    - React
date: '2022-07-14 17:27:46'
---

## 介绍

[React官网介绍](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)

useEffect接收一个函数

```jsx
useEffect(() => {
  ...
})
```

这个函数将会在组件渲染后自动执行，除非被设置了[执行条件](#设置条件执行)

> 注意⚠️：在React18版本后，在开发环境下，useEffect接收的这个函数，在组件首次渲染时会`执行两次！` 程序打包后不会有此问题！！！

## 设置条件执行

按照上述的代码，组件每次渲染useEffect都会执行。

然而我们的需求可能是渲染后执行一次即可（向服务端请求数据），或者是某个状态（state）更新后再执行

```jsx
//渲染后执行一次
useEffect(() => {
  ...
},[])

//某个状态更新后再执行
useEffect(() => {
  ...
},[state,...,...]) 
```

useEffect的第二个参数是一个数组，数组为空时：组件渲染后执行一次；数组内有变量时：这个变量更新后渲染。数组内可以有多个变量。

不管是无条件执行，还是条件执行：uesEffect都会在组件渲染后执行一次！！！

> 注意⚠️官方给出了警告：
>     如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会发生变化且在 effect     中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。

## 清除

由于useEffect中经常会用到订阅或者定时器等功能，所以在组件卸载时这些资源都需要被清除，useEffect也提供了清除的方法：

```jsx
useEffect(() => {

  return () => {

    }

}, [state])
```
![xiaoxin](https://cdn.staticaly.com/gh/xiaoxiaoboa/blog-pic@main/xiaoxin.58cqmwe5jas0.webp)

在useEffect的函数中再return一个函数，这个函数会在组件~~**渲染后**~~和**卸载前**执行

> ⚠️此处有错误：useEffect返回的这个函数，处于**开发模式**时：组件渲染后这个函数会执行；如果处于**打包后的正式模式**：则组件渲染后这个函数不会执行，只有在卸载前执行。
> ***有无依赖项都是一样的！***
> 此处版本：`"react-dom": "^18.2.0"`
> 
> 时间：2022年10月1日

## 获取上一次状态的值

```jsx
const [state, setState] = useState(false)

useEffect(() => {

  return () => {
    console.log(state)
  }

}, [state])
```
