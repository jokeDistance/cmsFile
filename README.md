# VuePress

## 项目介绍

VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

**VuePress 需要 Node.js (opens new window)>= 8.6**

[VuePress开发文档](https://www.vuepress.cn/)

## 快速上手

1.将git仓库代码拉到本地

2.进入项目文件根目录,在git窗口中运行 `yarn init` 将代码初始化

3.运行 `yarn docs:dev` 在本地启动服务器

4.运行 `yarn run docs:build` 生成静态文件打包

5.进入**cmd**进入生成的文件夹 `cd docs/.vuepress/dist` 

6.最后即可发布到对应域名 `echo 'www.example.com' > CNAME`