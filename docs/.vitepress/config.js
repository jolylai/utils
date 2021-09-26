module.exports = {
  title: "Lodash",
  description: "🚀 Lodash 学习笔记",
  // base: "/notebook-lodash/",
  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "jolylai/notebook-vue",
    editLinks: true,
    smoothScroll: true,
    editLinkText: "Edit this on GitHub!",
    lastUpdated: "Last updated",
    // docsDir: "docs",
    sidebarDepth: 2,
    nav: [
      {
        text: "Lodash",
        link: "/function/after",
        activeMatch: "^/lodash/",
      },
    ],
    sidebar: [
      {
        text: "集合 Collection",
        collapsable: false,
        children: [
          { text: "前言", link: "/collection/index" },
          { text: "forEach", link: "/collection/forEach" },
          // { text: "bind", link: "/collection/bind" },
          // { text: "bindKey", link: "/collection/bindKey" },
          // { text: "memoize", link: "/collection/memoize" },
          // { text: "once", link: "/collection/once" },
          // { text: "overArgs", link: "/collection/overArgs" },
        ],
      },
      {
        text: "函数 Function",
        collapsable: false,
        children: [
          { text: "after", link: "/function/after" },
          { text: "before", link: "/function/before" },
          { text: "bind", link: "/function/bind" },
          { text: "bindKey", link: "/function/bindKey" },
          { text: "memoize", link: "/function/memoize" },
          { text: "once", link: "/function/once" },
          { text: "overArgs", link: "/function/overArgs" },
        ],
      },
    ],
  },
};
