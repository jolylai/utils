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
    docsDir: "docs",
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
        text: "函数 Function",
        collapsable: false,
        children: [{ text: "after", link: "/function/after" }],
      },
    ],
  },
};
