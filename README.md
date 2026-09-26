# 学习札记

RagingSilence 的中文学习博客，使用 Hugo + GitHub Pages。页面无需数据库、付费服务或外部字体。数学公式在构建时转换为 MathML，在当前主流浏览器中直接显示。

## 第一次上线

1. 登录自己的 GitHub，创建公开仓库 `RagingSilence.github.io`。如果已有同名仓库，请先检查原内容，避免覆盖旧网站。
2. 上传本目录里的源码，保留目录结构，包含 `.github/workflows/pages.yml`，分支名使用 `main`。不要上传生成的 `public` 目录。
3. 进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 进入 **Actions → Publish blog to GitHub Pages → Run workflow**。以后提交到 `main` 会自动构建发布。
5. 等待工作流成功，访问 https://ragingsilence.github.io/ 。

仓库未创建、工作流未运行前，上面的地址不会展示这个博客。

### 用 Git 上传

在这个目录打开终端。以下命令只用于新仓库；如果已有仓库，先克隆已有仓库再合并文件。

```powershell
git init -b main
git add .
git commit -m "Create learning blog"
git remote add origin git@github.com:RagingSilence/RagingSilence.github.io.git
git push -u origin main
```

以上使用 SSH 推送。如果 SSH 密钥配置在 WSL 中，请在 WSL 终端运行 Git 命令。可以先用 `ssh -T git@github.com` 确认身份；GitHub 返回成功认证的用户名即可，退出码 1 在这个测试中是正常的。SSH 不能创建远程仓库，需要先完成上面的仓库创建步骤。不要在源码或文章中放入密码、Token 等密钥。

## 本地预览

安装 Hugo 0.166.0 或更新版本，然后运行：

```powershell
hugo server -D
```

打开终端提示的本地地址。`-D` 会显示草稿；线上工作流默认不会发布草稿。

生成正式网页：

```powershell
hugo --minify
```

部署流程固定使用已验证的 Hugo 0.166.0，升级时同步修改 `.github/workflows/pages.yml`。

## 写一篇新笔记

```powershell
hugo new content posts/my-first-note.md
```

生成的文章位于 `content/posts/my-first-note.md`。修改标题、日期、摘要、分类、标签，填写正文，准备发布时将 `draft: true` 改为 `draft: false`。

```yaml
---
title: 我的第一篇学习笔记
date: 2026-09-27T00:00:00+08:00
draft: false
description: 今天学习了什么，以及我遇到的问题。
categories: [学习笔记]
tags: [操作系统]
---
```

注意日期不要填写为未来时间，否则默认构建会跳过该文章。分类和标签会自动生成页面。首页显示最近 5 篇，文章列表自动分页。

也可以在 GitHub 网页内直接修改文章，或通过 **Add file → Create new file** 新建 `content/posts/文件名.md`。没有安装 Hugo 也可以在线写作。

`templates/paper-note.md` 和 `templates/project-note.md` 是论文阅读和项目笔记模板；复制到 `content/posts/` 后修改标题、日期和 `draft` 即可。

### 代码与公式

代码块使用三个反引号，后面注明语言，例如 `python`。文章页会自动添加复制按钮。

行内公式：`\(a^2 + b^2 = c^2\)`。

独立公式使用一对 `$$`，各自单独占一行。公式写法请参考 `content/posts/first-note.md`。

### 图片

推荐创建文章文件夹，例如 `content/posts/my-note/index.md`，把图片放在同一文件夹，用 `![图片说明](diagram.png)` 引用。

## 个性化

- 博客名称、作者与简介：`hugo.toml`。
- 个人介绍：`content/about.md`。
- 首页介绍：`layouts/home.html`。
- 颜色与排版：`static/css/style.css`。
- 页脚 GitHub 链接：`layouts/baseof.html`。
- 示例文章：`content/posts/first-note.md`，可修改或删除。改为自己的真实笔记时移除 `example: true`。

## 文件结构

```text
.github/workflows/pages.yml  自动发布
archetypes/                 新文章模板
content/                    Markdown 文章与关于页
layouts/                    页面模板与公式渲染
static/                     样式、图标与复制代码脚本
templates/                  论文阅读和项目笔记模板
hugo.toml                   博客配置
```
