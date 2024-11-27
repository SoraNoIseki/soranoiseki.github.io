+++
title = "文章示范页面"
date = "2023-01-01T08:30:00-07:00"
draft = false
url = "news"
+++

欢迎来到文章主页！以下是创建新文章和自定义模板的指南。

## 创建新文章

### 选项一：通过 Hugo 创建（推荐）

```shell
hugo new content content/posts/my-first-post.md
```

### 选项二：手动创建

1. **进入 `content/posts/` 文件夹**
   
在你的 Hugo 项目中，找到 `content/posts/` 文件夹，这是存放文章的默认位置。

2. **创建一个新的 Markdown 文件**  

文件名可以根据需求命名，例如：

- `2024-11-25-example-post.md`
- `my-first-post.md`

3. **添加 Front Matter**  

在文件开头加入以下内容：

```markdown
+++
title = "post title"
date = "2024-01-01"
draft = false
description = "This is a description text"
tags = ["tutorial", "news"]
slug = "example-post"
+++
```

- `title`: 定义文章的标题。
- `date`: 设置文章发布日期。通过 Hugo 自动生成的时间格式为 `2024-01-01T10:00:00+02:00`。
- `draft`: 标记文章是否为草稿，false 表示发布。
- `description`: 文章摘要，会显示在文章列表中，有利于搜索引擎优化（SEO）。
- `tags`: 文章标签，可设置多个。
- `slug`: （可选项）文章URL地址，请使用英文、数字和横线（-）；不定义此项则会默认根据文件名自动生成文章URL。**输入一个带有清晰语意的URL有利于提高文章被搜索引擎收录的可能性。**

### 书写文章正文

在 Front Matter 下方书写你的文章内容，例如：

```markdown
+++
title = "post title"
date = "2024-01-01"
draft = false
description = "This is a description text"
tags = ["tutorial", "news"]
slug = "example-post"
+++

这是我的第一篇文章！Hugo 是一个强大的静态网站生成器。
```

Markdown 语法请参见：[Markdown Guide](https://www.markdownguide.org/basic-syntax/)

---

## 自定义模板

此页面 (`posts` 主页) 的内容由`themes/skynova/content/posts/_index.md`定义。如果需要修改，可以复制该文件到`content/posts/_index.md`进行修改。

对于多语言网站，同时需要复制所有对应语言的模板，例如：

- `content/posts/_index.en.md`
- `content/posts/_index.zh.md`

### 文件说明

1. **Front Matter**

- `title`: 页面标题。
- `description`: 页面描述。
- `date`: 定义页面创建时间。
- `draft`: 是否为草稿。

2. **正文内容**

Hugo 会优先使用 `_index.md` 文件中的内容作为列表页面的正文。

3. **模板配合**

- `themes/skynova/content/posts/_index.md` 定义页面的主要内容。
- `layouts/posts/list.html` 渲染模板控制页面布局和结构。

