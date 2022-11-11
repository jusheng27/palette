const path = require('path'); // 路径模块
const docsRoot = path.join(__dirname, '..');
const readFile = require(path.join(__dirname, '/utils') + '/readFile');

module.exports = {
  base: '/palette/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: 'palette',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: '/favicon.ico',
    docsDir: 'docs',
    displayAllHeaders: false,
    smoothScroll: true,
    lastUpdatedText: '最近更新时间',

    nav: [
      { text: '日常', link: '/daily/' },
      { text: '开发提效系列', link: '/efficiency/01.Icon组件' },
      { text: 'element-plus', link: '/element-plus/基础组件/01.Layout 布局' },
      { text: 'lodash', link: '/lodash/' },
      { text: '工程化', link: '/engineering/' },
      { text: '设计模式', link: '/design-patterns/' },
      {
        text: '书籍笔记',
        items: [
          { text: '《Vue.js 设计与实现》', link: '/book-notes/vue-design/' },
          { text: '《JavaScript 设计模式与实践》', link: '/book-notes/js-design-patterns/' }
        ]
      },
      { text: '算法', link: '/algorithm/' },
    ],

    sidebar: {
      '/efficiency': [{
        text: '开发提效系列',
        collapsable: false,
        items: readFile('/efficiency')
      }],
      '/element-plus/': readFile('/element-plus')
    },
  }
}