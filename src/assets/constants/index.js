/**
 *  定义常量模块
 */
import con1 from '@/assets/images/project_01.jpg'
import con2 from '@/assets/images/project_02.jpg'
import con3 from '@/assets/images/project_03.jpg'
import con4 from '@/assets/images/project_04.jpg'
import con5 from '@/assets/images/project_05.jpg'
import con6 from '@/assets/images/project_06.jpg'
import con7 from '@/assets/images/project_07.jpg'
import con8 from '@/assets/images/project_08.jpg'
import icon from '@/assets/images/search.png'

/**
 *  导航栏
 */
export const navBarList = [
  {
    command: 'navbar.myInfo',
    select: '.section2',
    bounce: false
  },
  {
    command: 'navbar.skillGrasp',
    select: '.section5',
    bounce: false
  },

  {
    command: 'navbar.myExperience',
    select: '.section4',
    bounce: false
  },
  {
    command: 'navbar.myProject',
    select: '.section3',
    bounce: false
  },
  {
    command: 'navbar.contact',
    select: '.section6',
    bounce: false
  }
]

/**
 *  技能掌握
 */

export const skill = [
  {
    id: 1,
    desc: [
      '熟悉HTML、CSS布局技术，掌握Less、Sass预编译技术。',
      '熟悉移动端常见技术：流式布局、Flex布局、Rem适配等技术。',
      '熟悉Bootstrap框架，清楚其栅格系统的实现原理，以实现响应式开发。'
    ],
    descEn: [
      'Familiar with HTML and CSS layout technology, master Less and Sass pre-compilation technology',
      'Familiar with common mobile technologies: streaming layout, Flex layout, Rem adaptation and other technologies.',
      'Familiar with Bootstrap framework and understand the implementation principle of its grid system to realize responsive development.'
    ],
    icon: '#mario-HTML'
  },
  {
    id: 2,
    desc: [
      '熟悉原生JS的DOM、BOM操作，以及JQuery插件库、Ajax技术实现页面交互效果。',
      '掌握Javascript的闭包、深浅拷贝、原型链等技术点，以及ES6高级语法的使用。',
      '熟悉Dayjs lodash Echarts、cropper等第三方插件的使用，来提高开发效率。'
    ],
    descEn: [
      'Familiar with native JS DOM, BOM operations, as well as JQuery plug-in library, Ajax technology to achieve page interaction effects. ',
      'Master the technical points of Javascript closure, deep and shallow copy, prototype chain, and the use of ES6 advanced syntax. ',
      'Familiar with the use of third-party plug-ins such as Dayjs lodash Echarts and cropper to improve development efficiency. '
    ],
    icon: '#mario-javascript_'
  },
  {
    id: 3,
    desc: [
      '掌握ElementUI、Vant、Layui等UI框架的使用，从而快速搭建页面。',
      '熟悉Vue、Vue-cli、Vuex、VueRouter、Axios技术栈实现SPA单页面应用和组件化开发。',
      '熟悉uni-app实现快速开发小程序项目。'
    ],
    descEn: [
      'Master the use of UI frameworks such as ElementUI, Vant, Layui, etc. to quickly build pages. ',
      'Familiar with Vue, Vue-cli, Vuex, VueRouter, Axios technology stack to realize SPA single page application and component development. ',
      'Familiar with uni-app to realize rapid development of small program projects. '
    ],
    icon: '#mario-vue'
  },
  {
    id: 4,
    desc: [
      '了解Node.js、Mysql、Nginx、以及linux常用命令。',
      '熟悉Git版本控制工具和webpack工具的使用。',
      '熟悉React组件化开发'
    ],
    descEn: [
      'Understand Node.js, Mysql, Nginx, and Linux commonly used commands. ',
      'Familiar with the use of Git version control tools and webpack tools. ',
      'Familiar with React component development'
    ],
    icon: '#mario-react'
  }
]

/**
 *   个人作品
 */
export const project = [
  {
    id: 1,
    title: '商城类页面',
    imgUrl: con1,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 2,
    title: '商城类页面',
    imgUrl: con2,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 3,
    title: '商城类页面',
    imgUrl: con3,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 4,
    title: '商城类页面',
    imgUrl: con4,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 5,
    title: '商城类页面',
    imgUrl: con5,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 6,
    title: '商城类页面',
    imgUrl: con6,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 7,
    title: '商城类页面',
    imgUrl: con7,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  },
  {
    id: 8,
    title: '商城类页面',
    imgUrl: con8,
    desc: '购物车结算、删除、全选、金额计算',
    icon: icon
  }
]
