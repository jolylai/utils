module.exports = {
  title: "Lodash",
  description: "🚀 JavaScript 学习笔记",
  base: "/notebook-lodash/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "jolylai/notebook-js",
    nav: [
      {
        text: "Array",
        link: "/array/"
      },
      {
        text: "Object",
        link: "/object/"
      }
    ],
    sidebar: require("./siderbar")
  }
};
