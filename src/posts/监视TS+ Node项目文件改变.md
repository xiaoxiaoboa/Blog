---
title: '监控TS+ Node项目文件改变'
date: '2023-02-05 16:31:25'
---

## 所需库
1. 安装`ts-node`  [ts-node](https://github.com/TypeStrong/ts-node)
2. 安装`nodemon` [nodemon](https://github.com/remy/nodemon)  
## 配置文件
1. nodemon
```json
{
  "watch": "./src",
  "exec": "ts-node ./src/app.ts",
  "ext": "ts"
}
```
- watch：监控的位置
- exec：执行的命令
- ext：监控的文件类型
2. package.json
```json
 "scripts": {
    "dev": "nodemon"
  }
```
## 运行
```shell
yarn dev
```