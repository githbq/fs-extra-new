# fs-extra-new

## 功能介绍

1. 基于fs-extra@^9
2. 继承所有fs-extra方法 
3. 拓展 isDirectory 与 isDirectorySync 方法 
4. 所有方法默认返回 promise ,如果方法名以sync结尾则同步返回

## 安装
```
yarn add fs-extra-new
//or
npm install fs-extra-new

```

## 使用
```
import fs from 'fs-extra-new'

const isDirectory = await fs.isDirectory('./abc')

```
 
