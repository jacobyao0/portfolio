# 姚杰元的个人作品集

一个纯原生的个人作品集网站，用于展示项目作品、个人简介与联系方式。

## 主要功能

- **项目展示与类别筛选**：以图文交替的叙事式布局展示项目，支持按「Web 应用 / AI 应用 / 数据可视化」分类筛选；
- **深浅色主题切换**：一键切换浅色/深色主题，选择通过 `localStorage` 记忆，并在首次访问时遵循系统颜色偏好；
- **响应式布局**：桌面端为「左侧边栏 + 右侧主内容」双栏结构，移动端自动切换为上下单栏布局，并折叠为汉堡菜单；
- **滚动导航高亮**：滚动页面时自动高亮当前区块对应的侧边导航项。

## 技术栈

- 原生 HTML / CSS / JavaScript
- 无前端框架（React、Vue 等）和第三方 UI 组件库
- 项目示意图使用内联 SVG 绘制，无需外部图片资源

## 本地运行

方式一：直接用浏览器打开 `index.html` 即可。

方式二：使用 VS Code 的 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件——在 `index.html` 上右键选择 "Open with Live Server"，修改代码后页面会自动刷新。

## 项目结构

```
lab04/
├── index.html   # 页面结构（侧边栏、Hero、项目、关于我、联系方式）
├── style.css    # 样式与深浅色主题变量（--ink / --bg / --line 等）
├── script.js    # 主题切换、分类筛选、移动端菜单、滚动高亮
└── profile.md   # 个人简介资料
```
