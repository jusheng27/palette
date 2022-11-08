module.exports = {
  base: '/palette/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: '日常', link: '/daily/'},
      {text: '开发提效系列', link: '/efficiency/'},
      {text: 'element-plus', link: '/element-plus/'},
      {text: 'lodash', link: '/lodash/'},
      {text: '工程化', link: '/engineering/'},
      {text: '设计模式', link: '/design-patterns/'},
      {
        text: '书籍笔记',
        items: [
          {text: '《Vue.js 设计与实现》', link: '/book-notes/vue-design/'},
          {text: '《JavaScript 设计模式与实践》', link: '/book-notes/js-design-patterns/'}
        ]
      },
      {text: '算法', link: '/algorithm/'},
    ]
  }
}