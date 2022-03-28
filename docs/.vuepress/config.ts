import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from "path";

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: "/cmsFile/",
    lang: 'en-US',
    title: '康来生物管理平台操作手册',
    description: 'klab-cms introduce',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    // 主题和它的配置
    //   多语言支持的各个语言 locales 。
    locales: {},

    /**
     * 主题配置
     */
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/logo.png',
    },
    /**
     * 目录配置
     */
    dest: path.resolve(__dirname, "./dist"),
    temp: path.resolve(__dirname, "./.temp"),
    cache: path.resolve(__dirname, "./.cache"),
    public: path.resolve(__dirname, "./public"),

    /**
     * 开发配置项目
     */
    debug: false,
    host: 'localhost',
    port: 8080,
    open: false,
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    shouldPreload: true,  // 文件预加载
})