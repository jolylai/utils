import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@xtep/utils',
  description: '通用的 JavaScript/TypeScript 工具类集合集合',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '指引',
        link: '/collection/groupBy',
        activeMatch: '^/',
      },
    ],
    sidebar: getGuideSidebar(),
  },
})

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [{ text: '快速开始', link: '/guide/getting-started' }],
    },
    {
      text: 'Collection 集合',
      items: [
        { text: 'foreach', link: '/collection/foreach' },
        { text: 'groupBy', link: '/collection/groupBy' },
      ],
    },
    // {
    //   text: 'Array',
    //   items: [{ text: 'flatten', link: '/array/flatten/' }],
    // },
    {
      text: 'Date',
      items: [
        { text: '日期', link: '/date/index' },
        { text: 'formatDate', link: '/date/formatDate' },
        { text: 'formatDuration', link: '/date/formatDuration' },
        { text: 'daysAgo', link: '/date/daysAgo' },
        { text: 'addDaysToDate', link: '/date/addDaysToDate' },
      ],
    },
    // {
    //   text: 'Function',
    //   items: [{ text: 'after', link: '/function/after/' }],
    // },
    // {
    //   text: 'String',
    //   items: [{ text: 'string', link: '/string/' }],
    // },
  ]
}
