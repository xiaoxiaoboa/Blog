---
title: '常见排序'
date: '2023-01-24 17:19:33'
---

## 生成数字数组

```js
//生成数字数组
const generateNums = () => {
  const nums = []
  for (let i = 0; i < 10; i++) {
    const newNum = Math.floor(Math.random() * 100)
    nums.push(newNum)
  }
  return nums
}
```


## 冒泡排序
相邻的，两两比较。

每一轮都找出最大的数，排在最后；下一轮开始，这个最大的数不用参与比较。

重复以上。


```js
//冒泡排序
const bubbleSort = arr => {
  let temp
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(generateNums()))

```


## 选择排序
依次比较，每轮选出最小(大)的


```js
// 选择排序，选出最小，放到前面
const selectSort = arr => {
  const length = arr.length
  for (let i = 0; i < length - 1; i++) {
    let smallIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[smallIndex]) {
        smallIndex = j
      }
    }
    if (smallIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[smallIndex]
      arr[smallIndex] = temp
    }
  }
  return arr
}

console.log(selectSort(generateNums()))
```