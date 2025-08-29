# 🚀 SilentX / 寂静猎手

_Modern Static Site Generator with Component Architecture_  
_基于 Astro 的现代化静态站点生成器，集成先进的组件架构_

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.13.2-ff5d01?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.0-38b2ac?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)

[🌍 Live Demo](https://www.silentxx.com) • [📖 中文文档](#中文简介) • [📖 English Docs](#english-overview) •  
[🚀 Quick Start](#快速开始) • [🏗️ Architecture](#系统架构)

---

## 📖 项目前言 / Project Overview

初见此主题，便深深爱上，多亏了自己这双近视又老花的双重慧眼，只是由于女主人工作太忙无暇更新，而本人技术水平又实在有限，几经折腾，终于也算有了一点小小成果，至少自己用起来是没多大问题了，并且我在原主题的基础上进行了一些必要与非必要的修改，以完善和增强系统性能，创新精神粗略估算已经达到 5 颗星水平~

Upon first encountering this theme, I was deeply captivated. Thanks to my unique combination of nearsightedness and presbyopia, I developed a keen eye for detail. However, as the original author has been too busy with work to provide regular updates, and given my own limited technical skills, it took considerable effort to achieve modest improvements. At the very least, it now works well for my personal use. Building upon the original theme, I've made both necessary and unnecessary modifications to enhance system performance. I'd conservatively rate my innovative spirit at a full five-star level~

感谢原作者和余弦的贡献与指导，也感谢勤劳又学习意志超强的自己，坦白讲，半个月前我还不懂怎么使用 GitHub 和 VS Code，尽管困难重重，但我的热情却从未改变，有时候为了修改代码，我老人家还特么熬夜到凌晨 4 点多，真可谓是老当益壮，宝刀未老啊~

I extend my heartfelt gratitude to the original author and to Cosine for their valuable contributions and guidance. I'm also thankful for my own diligence and unwavering determination to learn. To be honest, just half a month ago, I didn't even know how to use GitHub or VS Code. Yet my enthusiasm has never waned. Sometimes, in my eagerness to modify the code, I would stay up until 4 AM—truly proving that age is just a number when it comes to passion and capability!

特别感谢 ChatGPT、Gemini，通义灵码以及他的外国小表弟 Qoder，在我的亲情关怀与悉心指导下，它们通力配合，完成了卓有成效的工作，也让我的智商从 250 瞬间飙升至 250+，实现了从高级人类到程序猿类的反向进化，也许，这就是所谓“返璞归真”的内涵本质~

Special thanks to ChatGPT, Gemini, Tongyi Lingma, and its international cousin Qoder. With my affectionate care and meticulous guidance, they collaborated seamlessly to accomplish highly effective work. This collaboration even boosted my IQ from 250 to 250+ in an instant, fulfilling my reverse evolution from an advanced human to a programming primate. Perhaps this is the essence of returning to simplicity and authenticity~

---

## 🏆 项目特色 / Project Features

| 特性 / Feature                        | 说明 / Description                   | 优势 / Advantage                             |
| ------------------------------------- | ------------------------------------ | -------------------------------------------- |
| 🚀 **Astro SSG**                      | 静态站点生成 / Static Site Generator | 极速加载，SEO 友好 / Fast load, SEO friendly |
| ⚡ **部分水合 / Partial Hydration**   | 按需 JavaScript / On-demand JS       | 减少包大小 / Reduce bundle size              |
| 🎨 **shadcn/ui**                      | 现代化组件库 / Modern UI Components  | 一致的设计语言 / Consistent design           |
| 📱 **响应式设计 / Responsive Design** | 多设备适配 / Multi-device support    | 完美移动端体验 / Perfect mobile experience   |

---

## 📈 性能指标 / Performance Metrics

| 指标 / Metric                    | 分数 / Score | 说明 / Description                     |
| -------------------------------- | ------------ | -------------------------------------- |
| 🚀 **性能 / Performance**        | 98/100       | 极速加载体验 / Fast load experience    |
| ♿ **可访问性 / Accessibility**  | 95/100       | 无障碍友好 / Accessibility friendly    |
| 🔍 **SEO**                       | 100/100      | 搜索引擎优化 / Search engine optimized |
| 📱 **最佳实践 / Best Practices** | 96/100       | 现代化标准 / Modern standard           |

_数据来源 / Source: [Lighthouse Performance Test](https://developers.google.com/speed/pagespeed/insights/)_

---

## 📁 项目结构 / Project Structure

```plaintext
SilentX/
├── src/                    # 源代码 / Source Code
│   ├── components/         # 组件库 / Component library
│   ├── constants/          # 常量配置 / Constants
│   ├── content/            # 内容管理 / Content management
│   │   └── blog/           # 博客文章 / Blog posts
│   ├── layouts/            # 布局模板 / Layout templates
│   ├── pages/              # 页面路由 / Page routes
│   └── styles/             # 样式文件 / Style files
├── public/                 # 静态资源 / Static assets
│   ├── fonts/              # 字体文件 / Font files
│   └── img/                # 图片资源 / Image assets
├── astro.config.mjs        # Astro 配置 / Astro configuration
├── tailwind.config.mjs     # Tailwind CSS 配置 / Tailwind CSS configuration
├── package.json            # 项目依赖 / Project dependencies
└── tsconfig.json           # TypeScript 配置 / TypeScript configuration
```

---

## 📋 环境要求 / Requirements

- Node.js >= 18.x
- pnpm >= 10.x
- Git

---

## 🛠️ 开发命令 / Development Commands

```bash
# 开发环境 / Development

pnpm dev              # 启动开发服务器 / Start dev server
pnpm build            # 构建生产版本 / Build production
pnpm preview          # 预览构建结果 / Preview build
```

---

## 🔧 安装部署 / Installation & Deployment

```bash
# 1. 克隆项目 / Clone repo
git clone https://github.com/AheheXx1982/SilentX.git
cd SilentX

# 2. 安装依赖 / Install dependencies
pnpm install

# 3. 启动开发服务器 / Start dev server
pnpm dev

# 4. 构建生产版本 / Build production
pnpm build

# 5. 预览构建结果 / Preview build
pnpm preview
```

---

## 🌐 一键部署 / One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AheheXx1982/SilentX)

---

## 🔧 基本配置 / Basic Config

- [src/constants/site-config.ts](src/constants/site-config.ts) 修改站点信息 / modify site info

---

## 🎨 主题定制 / Theme Customization

```css
:root {
  --primary: 351 77% 62%;
  --primary-foreground: 355.7 100% 97.3%;
}
```

---

## 📝 内容管理 / Content Management

新文章放在 [src/content/blog/](src/content/blog/):

```plain
---
title: '文章标题 / Title'
description: '文章描述 / Description'
date: 2025-01-01
category: '分类名称 / Category'
tags: ['标签 1 / Tag1', '标签 2 / Tag2']
---

# 文章内容 / Content

你的 Markdown 内容...
```

---

## 📈 更新日志 / Changelog

🎯 最新版本 / Latest: v0.0.1 (2025-08-29)

✨ **全新发布** / **Initial Release**

✅ Astro 5.13.2 核心框架 / Astro 5.13.2 Core Framework
✅ shadcn/ui 现代化组件库 / Modern UI Component Library
✅ 响应式设计 / Responsive Design
✅ SEO 优化 / SEO Optimization
✅ 404 页面外星人主题 / Alien-themed 404 Page

[📋 查看完整更新历史 → CHANGELOG.md](CHANGELOG.md)

---

## 🙏 致谢 / Thanks

### 核心灵感 / Inspiration

- [师傅👩🏻余弦の博客](https://space.cosine.ren/)
- [太师傅🧔🏻‍♀️Hexo Shoka](https://github.com/amehime/hexo-theme-shoka)

### 技术支持 / Tech Support

- [Astro](https://astro.build/)
- [Vercel](https://vercel.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### AI 助手 / AI Assistant

- [Qoder](https://qoder.com/)
- [ChatGPT](https://chat.openai.com/)
- [通义灵码](https://tongyi.aliyun.com/lingma)
- [Gemini](https://gemini.google.com/)

让我们一起构建更好的技术社区！ / Let's build a better tech community together!

[🔝 Back to Top](#top)

_Made with ❤️ by SilentXx Team_  
_Copyright © 2025 SilentX. All rights reserved._
