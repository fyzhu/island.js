# 快速开始

## 为什么选择 Island.js?

🏝️ Island.js 是一个基于 Vite、React 和 MDX 的静态站点生成器。它的特点是**简单**、**轻量**且**高性能**，旨在帮助你以最少的配置专注于编写和部署静态站点。它主要具有以下功能：

- **开发体验好**: 基于 Vite 进行构建，启动和热更新速度极快。
- **语法灵活**: 内置 MDX 支持，也就是说你可以在 Markdown 中使用 React 组件。
- **高性能**: 基于[孤岛架构](https://jasonformat.com/islands-architecture/), 实现了 Partial Hydration，意味着更少的客户端 JavaScript 和更少的运行时开销。
- **功能强大**: 默认主题内置了`夜间模式`、[`Home 主页`](/zh/guide/home-page)、[`API 预览页`](/zh/guide/api-page)、[`全文搜索`](/zh/guide/search)、[`国际化`](/zh/guide/i18n)等等能力。

接下来，我们将从零开始搭建一个基于 Island.js 的文档站点。

## 1. 初始化项目

首先，你可以通过以下命令创建一个新目录：

```bash
mkdir island-app && cd island-app
```

执行 `npm init -y` 来初始化一个项目。你可以使用 npm、yarn 或 pnpm 安装 Island.js:

```bash
# npm
npm install islandjs
# yarn
yarn add islandjs
# pnpm
pnpm add islandjs
```

然后通过如下命令创建文件:

```bash
mkdir docs && echo '# Hello World' > docs/index.md
```

在`package.json`中加上如下的脚本:

```json
{
  "scripts": {
    "dev": "island dev docs",
    "build": "island build docs",
    "preview": "island start docs"
  }
}
```

## 2. 启动 Dev Server

通过如下命令启动本地开发服务:

```bash
yarn dev
```

这样 Island.js 将在 http://localhost:5173 启动开发服务。

## 3. 生产环境构建

通过如下命令构建生产环境的产物:

```bash
yarn build
```

默认情况下，Island.js 将会把产物打包到 `.island/dist` 目录。

## 4. 本地预览产物

通过如下命令启动本地预览服务:

```bash
yarn preview
```

这样 Island.js 将在 http://localhost:5173 启动预览服务。
