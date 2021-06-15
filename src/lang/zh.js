import { descriptionCN, sayingCN } from '@/assets/constants/user.js'
export default {
  home: {
    dashboard: '首页',
    interset: '乐于探索前端新技术',
    vita: '个人简历',
    myBlog: '我的博客'
  },
  navbar: {
    blog: 'Mario博客',
    myInfo: '这是我',
    myProject: '我的作品',
    myExperience: '我的经历',
    skillGrasp: '技能掌握',
    contact: '联系我',
    chinese: '中文',
    english: '英文'
  },
  userInfo: {
    me: '这是我',
    description: descriptionCN,
    saying: sayingCN
  },
  Experience: {
    bigPeople: {
      company: '陕西上元智慧科技股份有限公司',
      pastTime: '08/2020',
      currentTime: '至今',
      work: '前端工程师',
      workDesc: '利用JS、CSS3书写前端功能，让页面更充实丰富'
    },
    student: {
      school: '山西工程技术学院',
      pastTime: '09/2016',
      currentTime: '06/2020',
      Education: '本科',
      studentDesc: '在校自学前端技术'
    }
  },
  skill: {
    project: [
      {
        id: 1,
        desc: [
          '熟悉HTML、CSS布局技术，掌握Less、Sass预编译技术。',
          '熟悉移动端常见技术：流式布局、Flex布局、Rem适配等技术。',
          '熟悉Bootstrap框架，清楚其栅格系统的实现原理，以实现响应式开发。'
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
        icon: '#mario-javascript_'
      },
      {
        id: 3,
        desc: [
          '掌握ElementUI、Vant、Layui等UI框架的使用，从而快速搭建页面。',
          '熟悉Vue、Vue-cli、Vuex、VueRouter、Axios技术栈实现SPA单页面应用和组件化开发。',
          '熟悉uni-app实现快速开发小程序项目。'
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
        icon: '#mario-react'
      }
    ]
  }
}
