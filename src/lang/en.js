import { descriptionEN, sayingEN } from '@/assets/constants/user.js'
export default {
  home: {
    dashboard: 'dashboard',
    interset: 'Willing to explore new front-end technologies',
    vita: 'My Vita',
    myBlog: 'My Blog'
  },
  navbar: {
    blog: 'Mario Blog',
    myInfo: "This's me",
    myProject: 'Project',
    myExperience: 'Experience',
    skillGrasp: 'Skill Grasp',
    contact: 'Contact Me',
    chinese: 'Chinese',
    english: 'English'
  },
  userInfo: {
    me: "This's Me",
    description: descriptionEN,
    saying: sayingEN
  },
  Experience: {
    bigPeople: {
      company: 'Beijing Zhongheng Borui Digital Technology Co., Ltd.',
      pastTime: '08/2020',
      currentTime: '至今',
      work: 'Front-end engineer',
      workDesc:
        'Use JS, CSS3 to write front-end functions to make the page more substantial'
    },
    student: {
      school: 'Shanxi Institute of Engineering and Technology',
      pastTime: '09/2016',
      currentTime: '06/2020',
      Education: 'Undergraduate',
      studentDesc: 'Self-taught front-end technology in school'
    }
  },
  skill: {
    project: [
      {
        id: 1,
        desc: [
          'Familiar with HTML and CSS layout technology, master Less and Sass pre-compilation technology',
          'Familiar with common mobile technologies: streaming layout, Flex layout, Rem adaptation and other technologies.',
          'Familiar with Bootstrap framework and understand the implementation principle of its grid system to realize responsive development.'
        ],
        icon: '#mario-HTML'
      },
      {
        id: 2,
        desc: [
          'Familiar with native JS DOM, BOM operations, as well as JQuery plug-in library, Ajax technology to achieve page interaction effects. ',
          'Master the technical points of Javascript closure, deep and shallow copy, prototype chain, and the use of ES6 advanced syntax. ',
          'Familiar with the use of third-party plug-ins such as Dayjs lodash Echarts and cropper to improve development efficiency. '
        ],
        icon: '#mario-javascript_'
      },
      {
        id: 3,
        desc: [
          'Master the use of UI frameworks such as ElementUI, Vant, Layui, etc. to quickly build pages. ',
          'Familiar with Vue, Vue-cli, Vuex, VueRouter, Axios technology stack to realize SPA single page application and component development. ',
          'Familiar with uni-app to realize rapid development of small program projects. '
        ],
        icon: '#mario-vue'
      },
      {
        id: 4,
        desc: [
          'Understand Node.js, Mysql, Nginx, and Linux commonly used commands. ',
          'Familiar with the use of Git version control tools and webpack tools. ',
          'Familiar with React component development'
        ],
        icon: '#mario-react'
      }
    ]
  }
}
